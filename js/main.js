;
function Content() {
    this.html = "";
}

Content.prototype.addContent = function() {

    this.createHeader();
    this.createSection();
    this.createLoadIcon();

    return this.html;

}

Content.prototype.createHeader = function() {

    this.html += `<header class="header">
            <div class="logo">сучья нора</div>
            <div class="header-menu">
                <img src="image/icons/menu_icon.png" alt="">
            </div>
        </header>`;

}

Content.prototype.createSection = function() {

    if (data) {
        for (var key in data) {
            this.html += `<section class="container">
            <p class="container-p">
                ${data[key].title}
            </p>
            <div class="container-img">
                <img src="${data[key].image}">
            </div>
            <div class="container-vote">`;

            for (var k in data[key].stars) {
                for (var i = 0; i < Math.round(data[key].stars.total / 2); i++) {
                    this.html += `<img src="${data[key].stars.src}" alt="">`;
                }
            }

            this.html += `</div>`;

            for (var i = 0; i < data[key].comments.length; i++) {
                this.html += `
                    <div class="container-comments">
                        <div class="container-comments-wrapper flex-h">
                            <div class="container-comments-user flex-v">
                                <div class="container-comments-user-img">
                                    <img src="${data[key].comments[i].src}" alt="user">
                                </div>
                                <div class="container-comments-user-nic">${data[key].comments[i].name}</div>
                            </div>
                            <div class="container-comments-user-text">
                                ${data[key].comments[i].text}
                            </div>
                        </div>
                    </div>`;
            }

            this.html += `</section>`;
        }
    } else {
        this.html += "No content";
    }

}

Content.prototype.createLoadIcon = function() {
    this.html += `<section class="container">
        <div style="text-align:center;margin-top:50px;">
            <img src="image/icons/download.gif" width=50 alt="loading">
        </div>
    </section>`;
}

