import { Observable, Subject, takeUntil } from "rxjs";

export const ref$ = (stream: Observable<any>, defaultVAlue?: any) => {

    const r = ref(defaultVAlue)
    const notifier = new Subject()
    onBeforeUnmount(() => notifier.next(1))
    stream.pipe(
        takeUntil(notifier)
    ).subscribe(v => r.value = v)

    return r
}