const itemStr = `<title>
Cầu thủ Argentina dùng kim khâu chích đối thủ giữa trận đấu
</title>
<description>
<![CDATA[
<a href="http://thethao.vnexpress.net/tin-tuc/cac-giai-khac/cau-thu-argentina-dung-kim-khau-chich-doi-thu-giua-tran-dau-3600480.html"><img width=130 height=100 src="http://img.f4.thethao.vnecdn.net/2017/06/16/Allende-2364-1497583035_180x108.jpg" ></a></br>Hậu vệ Federico Allende gây phẫn nộ trong làng bóng đá Argentina khi thừa nhận chích vào lưng tiền đạo đối phương bằng cây kim.
]]>
</description>
<pubDate>Fri, 16 Jun 2017 10:17:43 +0700</pubDate>
<link>
http://thethao.vnexpress.net/tin-tuc/cac-giai-khac/cau-thu-argentina-dung-kim-khau-chich-doi-thu-giua-tran-dau-3600480.html
</link>
<guid>
http://thethao.vnexpress.net/tin-tuc/cac-giai-khac/cau-thu-argentina-dung-kim-khau-chich-doi-thu-giua-tran-dau-3600480.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

function getBody(str, pre, post) {
    const start = str.indexOf(pre) + pre.length;
    const end = str.indexOf(post, start);
    return str.substring(start, end).trim();
};

function getTin(item) {
    const title = getBody(item, '<title>', '</title>');
    const link = getBody(item, '<link>', '</link>');
    const image = getBody(item, 'src="', '" ></a>');
    const desc = getBody(item, '</br>', ']]>');
    console.log(desc);
}

getTin(itemStr);
