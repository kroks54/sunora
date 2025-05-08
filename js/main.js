;
function Content() {
    this.html = "";
}

Content.prototype.addContent = function() {

    this.createHeader();
    this.createSlideItem();

    return this.html;

}

Content.prototype.createHeader = function() {

    this.html += `<header class="header">
            <div class="logo">sunora</div>
            <div class="header-menu">
                <img src="img/menu_icon.png" alt="">
            </div>
        </header>
        <h1 class="m-h1">Голые и <del>смешные</del> конченые</h1>`;

}

Content.prototype.createSlideItem = function() {

    if (data) {
        this.html += `<section class="cont">
                        <div class="itcss">
                        <div class="itcss__wrapper">
                            <div class="itcss__items">`;

        for (var i = 0; i < data.length; i++) {
            this.html += `<div class="itcss__item">
                            <div>
                                <p style="${data[i].top}" class="itcss__p">${data[i].title}</p>
                                <div class="itcss__stars">`;

        for (var n = 0; n < data[i].stars; n++) {

            this.html += `<img src="img/star_86960.png">`;

        }
            this.html += `</div>
                            <img class="itcss__img" src="${data[i].src}" >
                            </div>
                        </div>`;
        }

        this.html += `<div class="itcss__item">
                            <div style="height: 250px;">
                            <img src="img/download.gif" style="width:40px;position:absolute;top:45%;left:45%;">
                            </div>
                        </div>`;

        this.html += `</div>
                    </div>
                    <button class="itcss__btn itcss__btn_prev" role="button" data-slide="prev"></button>
                    <button class="itcss__btn itcss__btn_next" role="button" data-slide="next"></button>
                </div>
            </section>`;
    } else {
        this.html += "No content";
    }

}
