function customCreate(obj) {
  class F {}

  F.prototype = obj

  return new F()
}
