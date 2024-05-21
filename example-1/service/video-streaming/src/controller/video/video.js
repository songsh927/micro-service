const fs = require('fs');
const path = require('path')

exports.videoStreamById = async (req,res) => {

    const videoPath = path.join("./videos", "morningstar.mp4");
    fs.stat(videoPath, (err, stats) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
            return;
        }

        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4",
        });
        fs.createReadStream(videoPath).pipe(res);
    });
}