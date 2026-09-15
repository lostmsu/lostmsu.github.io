---
layout: post
title: "UGREEN FineCam 4K (CM973) modes"
categories: [ Windows, USB, hardware, webcam ]
---

USB `A108:2240`, webcam only supports USB 2.0 High-Speed (video bulk EP wMaxPacketSize=512).

MJPEG (format #1):

| Resolution | fps |
|---|---|
| 3840×2160 | 30 |
| 2560×1440 | 30 |
| 1920×1080 | 60, 30 |
| 1280×960 | 60, 30 |
| 1280×720 | 60, 30 |
| 1024×576 | 60, 30 |
| 800×600 | 60, 30 |
| 640×480 | 60, 30 |

Estimated JPEG quality setting ~70.

YUY2 uncompressed 16 bpp (format #2):

| Resolution | fps |
|---|---|
| 640×480 | 30 |
| 640×360 | 30 |

No uncompressed mode above 640×480; 1080p60 is MJPEG-only.

Quirks: MJPEG format block declares CS_INTERFACE subtype `0x06` (spec says `0x05`), so strict parsers incl. Linux uvcvideo may not expose MJPEG. Vendor bitrate fields unreliable; frame intervals are authoritative.
