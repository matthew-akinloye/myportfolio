const cloudinary = require('cloudinary');

cloudinary.v2.config({
    cloud_name: 'dcpzjgcgd',
    api_key: '685735728936196',
    api_secret: '8OJLCrxGqu02a1uqQK5xjvtkxuA',
    secure: true,
});

new CloudinaryImage("landmannalaugar_iceland.jpg")
    .resize(scale().width(1000))
    .delivery(quality(auto()))
    .delivery(format(auto()));