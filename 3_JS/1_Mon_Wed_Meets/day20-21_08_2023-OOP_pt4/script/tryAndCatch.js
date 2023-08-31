const obj = {
  f() {
    console.log('Hello!');
  },
};

delete obj.f;

try {
  obj.f();
} catch (exception) {
  console.log(exception);
} finally {
  console.log('COMPLETED');
}
