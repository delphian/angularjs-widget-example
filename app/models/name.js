widgetExample.models.Name = function(first, middle, last) {
    this.first = null,
    this.middle = null,
    this.last = null
};
widgetExample.models.Name.prototype.toString = function() {
    return this.first + " " + this.last;
};
