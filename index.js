const HID = require("node-hid")
const fs = require("fs")
const encoding = require("encoding-japanese")
const { StringDecoder } = require('string_decoder');

console.log(HID.devices());

const vid = 9139;
const pid = 12304

const device = new HID.HID(vid, pid);

device.on("data", (data) => {
    console.log(data);
    // console.log(encoding.detect(data))
    // const newdata = data.toString("ascii")
    // console.log(encoding.detect(newdata))
})
