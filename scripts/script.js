var colors = ["rgb(72, 190, 255)", "rgb(61, 250, 205)", "rgb(67, 197, 158)", "rgb(61, 112, 104)", "rgb(20, 69, 61)"];
var color = 0;

$('#new-quote-btn').click(function() {
    changeColors();
    currentQuote = new Quote();
    $('.quote').html(" " + Quote().quote + " ");
    $('.author').html(" " + Quote().author + " ");
});

function changeColors() {
    console.log(color);
    $('body').css('background-color', colors[color]);
    $('.quote-box').css('color', 'white');
    $('#new-quote-btn').css('background-color', 'white');
    $('#new-quote-btn').css('color', colors[color]);
    if (color == colors.length - 1) {
        color = 0;
    } else color++;
}

function Quote() {
  $.ajax( {
        url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
          var post = data.shift(); // The data is an array of posts. Grab the first one.
          $('#quote-title').text(post.title);
          $('#quote-content').html(post.content);

        },
        cache: false
      });
    });







    return {
        quote: "Here is the new quote!!!!!",
        author: "new Author"
    };



}
