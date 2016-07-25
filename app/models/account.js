widgetExample.models.Account = function(account) {
    this.name = new widgetExample.models.Name()
    this.type = null;
    this.title = null;
    this.image = null;
    if (typeof(account) != 'undefined' && account != null) {
        this.name.first = account.name.first;
        this.name.middle = account.name.middle;
        this.name.last = account.name.last;
        this.title = account.title;
        this.image = account.image;
        this.type = account.type;
    }
};
