import { Observable, Subject, takeUntil } from "rxjs";


export const ref$ = <T>(stream: Observable<T>, defaultVAlue?: T) => {

    const r = ref<T>(defaultVAlue as T)
    const notifier: Subject<number> = new Subject()
    onBeforeUnmount(() => notifier.next(1))
    stream.pipe(
        takeUntil(notifier)
    ).subscribe(v => r.value = v)

    return r
}

export const reactive$ = <T>(stream: Observable<T>, initialValue: T) => {
    let r = reactive(initialValue)
    const notifier: Subject<number> = new Subject()
    onBeforeUnmount(() => notifier.next(1))
    stream.pipe(
        takeUntil(notifier)
    ).subscribe(v => Object.assign(r, v))
    return r
}