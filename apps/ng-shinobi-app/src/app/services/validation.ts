export function Required(target: unknown, propertyName: string) {
  if (!hasNgOnInit(target)) {
    return undefined;
  }
  const originalOnInit = target.ngOnInit;
  target.ngOnInit = function () {
    if (this[propertyName] == undefined) {
      throw new Error(`${propertyName} is Required.`);
    } else {
      originalOnInit.apply(this);
    }
  }
}

function hasNgOnInit(target: unknown): target is {ngOnInit: () => void} {
  return !(target == null || typeof target !== 'object' || !('ngOnInit' in target) || typeof target['ngOnInit'] !== 'function');

}
