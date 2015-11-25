$('body').append('<div id="azothdaohang" style="background:url(http://img3.imgtn.bdimg.com/it/u=619583555,1515314524&fm=21&gp=0.jpg) no-repeat scroll 50% 0% transparent; width:85px;height:152px;"></div>');
$('#azothdaohang').css({
    'left':'995px',
    'top':'400px',
    'z-index':'9999',
    'position':'fixed'
});
$('#azothdaohang').hover(function() {
    alert('干嘛');
});
$('#azothdaohang').click(function() {
    alert('点我干嘛');
});