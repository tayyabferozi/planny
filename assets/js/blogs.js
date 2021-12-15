function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function truncateBlogText() {
  let mediaWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (mediaWidth < 769) {
    $(".blog-post .blog-text h3").each(function (idx, el) {
      $this = $(el);

      let text = $this.text().trim();

      let truncated = truncateString(text, 57);

      $this.text(truncated);
    });

    $(".blog-post .blog-text p").each(function (idx, el) {
      $this = $(el);

      let text = $this.text().trim();

      console.log(text);
      text = text.replace(/(\r\n|\n|\r)/gm, "");

      let truncated = truncateString(text, 174);

      console.log(text);

      $this.text(truncated);
    });
  }
  
}

window.addEventListener("resize", truncateBlogText());

truncateBlogText()