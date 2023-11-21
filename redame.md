<!--
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-15 14:09:02
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-21 12:28:10
 * @FilePath: \Kamikasi-Char\redame.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
把mp4推流成rtmp在src/server/public 文件夹下执行以下命令
>ffmpeg -i Obama.mp4 -c:v libx264 -preset veryfast -tune zerolatency -b:v 1500k -c:a aac -b:a 128k -f flv rtmp://localhost:1935/live/video
推流成功可在vlc播放器查看，