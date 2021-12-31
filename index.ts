function main(params: { a?: string; b?: string }) {
  const c = params.b && params.a;
  if (c) {
    [].forEach(() => {
      if (params.a) {
        unsetA(params);
        getString(params.a);
      }
      if (c) {
        getString(params.a);
      }
      getString(params.b);
    });
  }
}

function unsetA(params: { a?: string; b?: string }) {
  delete params.a;
}

function getString(v: string) {
  console.log(v);
}
