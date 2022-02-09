import { mande, MandeInstance } from 'mande'
import { BehaviorSubject, combineLatest, combineLatestAll, Observable, pluck, shareReplay, Subscriber, switchMap } from 'rxjs'
// import { acceptHMRUpdate, defineStore } from "pinia";


export const STRAPI_URL = import.meta.env.VITE_STRAPI_SERVER

export const initializeMande = () => {
    if (import.meta.env.SSR) {
        const BASE_URL = process.env.NODE_ENV !== 'production'
            ? 'http://sayebamco.com/api'
            : 'http://sayebamco.com/api'

        return mande(BASE_URL, {}, require('node-fetch'))
    } else {
        return mande(STRAPI_URL as string)
    }
}

export const api$ = (new Observable((subscriber: Subscriber<MandeInstance>) =>
    subscriber.next(initializeMande())
)).pipe(shareReplay())

interface Seo {
    id: string;
    metaTitle: string;
    metaDescription: string;
    shareImage: { url: string, alternativeText: string };
}

export interface Global {
    id: string;
    siteName: string;
    favicon: { url: string, alternativeText: string };
    defaultSeo: Seo;
}

export interface Category {
    id: string;
    name: string;
    articles: Article[];
}

export interface ProductModel {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: { url: string, alternativeText: string };
    price: string;
    categories: Category[];
    highlights: { title: string; options: string; required: boolean }[]
    featured: boolean;
    seo: Seo[];
}

export interface Article {
    id: string;
    slug: string;
    title: string;
    description: string;
    content: string;
    image: { url: string, alternativeText: string }[];
    category: Category;
    featured: boolean;
    seo: Seo[];
}

export interface State {
    trendingProducts: ProductModel[];
    recentProjects: Article[];
    homePage: {
        hero: any;
        seo: Seo[];
        Statistics: any;
        perks: any
    }
}

export const fetchHomePageInfo: Observable<any> = api$.pipe(
    switchMap(api => api.get('homepage'))
)

export const fetchGlobalInfo: Observable<Global> = api$.pipe(
    switchMap(api => api.get<Global>('global'))
)

export const fetchProductsSortedByID = (start: number, limit: number): Observable<ProductModel[]>  => {
    const query = { _sort: 'id:DESC', _limit: limit, _start: start }
    return api$.pipe(switchMap(api => api.get<ProductModel[]>('products', { query })))
}

export const fetchFeaturedProducts = (limit: number) => {
    const query = { feature_flage: true, _limit: limit }
    return api$.pipe(switchMap(api => api.get<ProductModel[]>('products', { query })))
}

export const fetchProductBySlug = (slug: string) => api$.pipe(
    switchMap(api => api.get<ProductModel>(`products/${slug}`))
)


export const fetchFeaturedArticles = (limit: number) => {
    const query = { featured: true, _limit: limit }
    return api$.pipe(
        switchMap(api => api.get<Article[]>('articles', { query })),
        shareReplay()
        )
}

export const fetchArticlesSortedByID = (start: number, limit: number) => {
    const query = { _sort: 'id:DESC', _limit: limit, _start: start }
    return api$.pipe(switchMap(api => api.get<Article[]>('articles', { query })))
}

export const fetchArticleBySlug = (slug: string) => api$.pipe(
    switchMap(api => api.get<Article>(`articles/${slug}`))
)

export const fetchProjects = (start: number, limit: number): Observable<Article[]> => {
    const query = { _sort: 'id:DESC', _limit: limit, _start: start }
    return api$.pipe(
        switchMap(api => (api.get<Category>('categories/project', { query }))),
        pluck('articles')
    )
}

const initialState: State = {
    trendingProducts: [],
    recentProjects: [],
    homePage: {
        hero: {},
        seo: [],
        Statistics: {},
        perks: {}
    }
}

const state = new BehaviorSubject(initialState as State)

// const getter = combineLatestAll([
//     fetchFeaturedArticles(3),
//     fetchHomePageInfo,
//     fetchProjects(0, 3)]).pipe(
//         shareReplay()
//         )