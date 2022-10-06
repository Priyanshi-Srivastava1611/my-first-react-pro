import React from "react";

export const Product = () => {
  return (
    <div
      className="swiper-slide portrait-A portrait-swiper swiper-slide-visible swiper-slide-active"
      data-swiper-slide-index={1}
      role="group"
      aria-label="2 / 5"
      style={{
        transform: "translateX(-0.0439174%) scale(0.999824)",
        zIndex: 15,
        opacity: 1,
        transitionDuration: "0ms",
      }}
    >
      {/* elements with  "swiper-carousel-animate-opacity" class will have animated opacity */}
      <div
        className="swiper-carousel-animate-opacity"
        style={{ opacity: "0.999707", transitionDuration: "0ms" }}
      >
        <video
          preload="metadata"
          playsInline
          onplay="this.parentNode.childNodes[13].style.display='none';"
          onpause="this.parentNode.childNodes[13].style.display='block';"
          onclick="this.pause();"
          ontimeupdate="window.pause_on_outof_focus(this);"
          className="ivs-video-comp portrait "
          id="ivs-video-player-revo-1"
          revo-video-index={1}
          poster="https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/uploads/images/1664188858625_eventCover.jpg"
          vidsrc="https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4"
          index={75591451188426}
          src="https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4"
        ></video>
        <img
          id="thumbnail-revo-1"
          src="https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/uploads/images/1664188858625_eventCover.jpg"
          index={75591451188426}
          vidsrc="https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0px",
            display: "none",
          }}
          className="portrait"
        />
        <h2 className="revo-embed-video-title-wrapper">
          <p className="revo-embed-video-title">Portrait show5</p>
        </h2>
        <div
          onclick="window.handleMuteVideo(event)"
          className="revo-carousel-slide-mute-icon mute"
        />
        <div
          onclick="window.handleMuteVideo(event)"
          className="revo-carousel-slide-unmute-icon"
        />
        <div
          onclick="window.minimizerevocarousel(75591451188426,'https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4',this.parentNode.childNodes[1].currentTime,'1','portrait','https://www.revolive.tv/pages/add-to-cart')"
          className="revo-carousel-slide-mini-icon"
        />
        <button
          onclick="window.MountVideo(this.parentNode.childNodes[3]); window.fetchProducts(this.parentNode.childNodes[3],75591451188426,1,false,'https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4',this.parentNode.childNodes[1].currentTime,'portrait');"
          className="revo-outer-grid-play-button-svg "
          style={{ display: "none" }}
        >
          <span className="revo-outer-grid-play-button-span " />
        </button>
        <div className="slide-content" style={{ zIndex: 1 }}>
          <div
            className="revo-embed-product-scroll-div"
            style={{ display: "flex" }}
          >
            <button
              className="revo-embed-product-scroll-button left"
              onclick="window.slide('left',this)"
            />
          </div>
          <div
            className="revo-embed-product-carousel-wrapper"
            id="revo-embd-product-carousel-1"
          >
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/FB80011-STRAIGHT.jpg?v=1596123917"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">Romy Bracelet</p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $35.00
                    </p>
                    <p
                      onclick="window.createNewDiv('35.00','Romy Bracelet','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NDcyNTAwNzA=','JTNDcCUzRVN0eWxpc2glMjBhbmQlMjBzdGFja2FibGUlMjBzdHJldGNoJUMyJUEwYnJhY2VsZXQlMjB3aXRoJTIwc2hpbnklMjBjcnlzdGFsJTIwYmVhZHMuJTNDL3AlM0U=','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/FB80011-STRAIGHT.jpg?v=1596123917','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkwOTkxNTI4Ng==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TN27632.jpg?v=1596123939"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">Lea Necklace</p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $79.00
                    </p>
                    <p
                      onclick="window.createNewDiv('79.00','Lea Necklace','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NDg5MjEyMzg=','JTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFV2UlMjBob3BlJTIweW91JTIwaGVhcnQlMjBpdCUyMGFzJTIwbXVjaCUyMGFzJTIwd2UlMjBkby4lMjBUaGlzJTIwc3dlZXRoZWFydCUyMHRha2UlMjBvbiUyMG91ciUyMGNsYXNzaWMlMjBzdGF0aW9uJTIwbmVja2xhY2UlMjBpcyUyMHRpbWVsZXNzLiUyMFdlYXIlMjBpdCUyMHNvbG8sJTIwbGF5ZXIlMjBpdCUyMHVwLCUyMG9yJTIwcGFpciUyMHdpdGglMjB0aGUlMjBMZWElMjBFYXJyaW5ncyElQzIlQTAlM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFLSUyME1hZGUlMjB3aXRoJTIwU3RlcmxpbmclMjBTaWx2ZXIlM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFLSUyMEFkanVzdGFibGUlMjBsZW5ndGg6JTIwMTYtMTctMTglMjIlM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDYnIlM0U=','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TN27632.jpg?v=1596123939','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkxNjQzNjExOA==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE27545.jpg?v=1596123928"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">Kyana Earrings</p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $69.00
                    </p>
                    <p
                      onclick="window.createNewDiv('69.00','Kyana Earrings','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NDgxNjc1NzQ=','JTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFMyUyMGlzJTIwYmV0dGVyJTIwdGhhbiUyMDEuJTIwVGhlc2UlMjB0cmlwbGUtYmFuZCUyMGRlbWktaG9vcHMlMjBhcmUlMjB0cmlwbGUlMjB0aGUlMjBzcGFya2xlLCUyMGFuZCUyMGElMjBicmVlemUlMjB0byUyMHN0eWxlLiUyMEp1c3QlMjBsaWtlJTIwdGhhdCwlMjB5b3UlRTIlODAlOTlyZSUyMHJlYWR5JTIwZm9yJTIwZXZlcnklMjBvY2Nhc2lvbiElM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFLSUyME1hZGUlMjB3aXRoJTIwU3RlcmxpbmclMjBTaWx2ZXIlM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFJTNDc3BhbiUzRS0lMjAxMyUyMG1tJTIwLyUyMDEwJTIwbW0lM0Mvc3BhbiUzRSUzQy9zcGFuJTNFJTNDL3AlM0UlMEElM0NwJTNFJTNDc3BhbiUzRURpQW1pJUMyJUFFJTIwc3RvbmVzJTIwYXJlJTIwZm91bmQlMjBvbmx5JTIwaW4lMjBUb2NhcmElMjBqZXdlbHJ5LiUyMFRoZXklMjBhcmUlMjBtYWRlJTIwdXNpbmclMjB0aGUlMjBwdXJlc3QlMjBlbGVtZW50cyUyMGFuZCUyMHRoZSUyMHNhbWUlMjBwcm9jZXNzJTIwdGhhdCUyMG5hdHVyZSUyMHVzZXMlMjB0byUyMGNyZWF0ZSUyMHByZWNpb3VzJTIwZ2Vtc3RvbmVzLiUyMFdlJTIwc2VsZWN0JTIwb25seSUyMHRoZSUyMGhpZ2hlc3QlMjBxdWFsaXR5LCUyMGZsYXdsZXNzJTIwc3RvbmVzJTIwYW5kJTIwZWFjaCUyMGhhcyUyMHBlcmZlY3QlMjBibHVlLXdoaXRlJTIwY29sb3IuJTIwRWFjaCUyMERpQW1pJUMyJUFFJTIwc3RvbmUlMjBpcyUyMHByZWNpc2lvbiUyMGN1dCwlMjByaWNobHklMjBmYWNldGVkJTIwYW5kJTIwcG9saXNoZWQlMjB0byUyMHJlZmxlY3QlMjBsaWdodCUyMHdpdGglMjBpbmNyZWRpYmxlJTIwJ2ZpcmUnLiUyMFRoZSUyMERpQW1pJUMyJUFFJTIwc3RvbmUlMjBpcyUyMHRoZW4lMjBoYW5kJTIwc2V0JTIwaW4lMjBzdGVybGluZyUyMHNpbHZlciUyMGFuZCUyMHJob2RpdW0lMjBwbGF0ZWQlMjBmb3IlMjBhJTIwbHV4dXJpb3VzJTIwbG9vay4lM0Mvc3BhbiUzRSUzQy9wJTNFJTBBJTNDYnIlM0U=','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE27545.jpg?v=1596123928','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkxMjg5NzE3NA==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE96074.jpg?v=1596123948"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">
                      Sara-Jade Ear Cuff
                    </p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $32.00
                    </p>
                    <p
                      onclick="window.createNewDiv('32.00','Sara-Jade Ear Cuff','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NDk4MDU5NzQ=','JTNDcCUzRU5vJTIwcGllcmNpbmc/JTIwTm8lMjBwcm9ibGVtISUyMFRoZSUyMFNhcmEtSmFkZSUyMGlzJTIwYSUyMFN0ZXJsaW5nJTIwU2lsdmVyJTIwZWFyJTIwY3VmZiUyMHRoYXQlMjBjb21mb3J0YWJseSUyMHdyYXBzJTIwYXJvdW5kJTIwdGhlJTIwdXBwZXIlMjBlYXIlMjBmb3IlMjBhbiUyMGVkZ3klMjBsb29rLiUyMEl0JTIwaGFzJTIwb3BlbiUyMGRldGFpbCUyMHdpdGglMjBhJTIwcm91bmQtY3V0JTIwc3BhcmtseSUyMERpQW1pJUMyJUFFJTIwaW4lMjB0aGUlMjBjZW50cmUlMjBmb3IlMjBzb21lJTIwYWRkZWQlMjBnbGFtLiUzQy9wJTNFJTBBJTNDcCUzRSUzQ3NwYW4lM0UtJTIwTWFkZSUyMHdpdGglMjBEaUFtaSUzQy9zcGFuJTNFJTNDc3VwJTNFJUMyJUFFJUMyJUEwJTNDL3N1cCUzRSUzQ3NwYW4lM0VhbmQlMjBTdGVybGluZyUyMFNpbHZlciUzQy9zcGFuJTNFJTNDYnIlM0UlM0NzcGFuJTNFLSVDMiVBMDguNzVtbSUyMGRpYW1ldGVyJTNDL3NwYW4lM0UlM0MvcCUzRSUwQSUzQ3AlM0UlM0NzcGFuJTNFRGlBbWklQzIlQUUlMjBzdG9uZXMlMjBhcmUlMjBmb3VuZCUyMG9ubHklMjBpbiUyMFRvY2FyYSUyMGpld2VscnkuJTIwVGhleSUyMGFyZSUyMG1hZGUlMjB1c2luZyUyMHRoZSUyMHB1cmVzdCUyMGVsZW1lbnRzJTIwYW5kJTIwdGhlJTIwc2FtZSUyMHByb2Nlc3MlMjB0aGF0JTIwbmF0dXJlJTIwdXNlcyUyMHRvJTIwY3JlYXRlJTIwcHJlY2lvdXMlMjBnZW1zdG9uZXMuJTIwV2UlMjBzZWxlY3QlMjBvbmx5JTIwdGhlJTIwaGlnaGVzdCUyMHF1YWxpdHksJTIwZmxhd2xlc3MlMjBzdG9uZXMlMjBhbmQlMjBlYWNoJTIwaGFzJTIwcGVyZmVjdCUyMGJsdWUtd2hpdGUlMjBjb2xvci4lMjBFYWNoJTIwRGlBbWklQzIlQUUlMjBzdG9uZSUyMGlzJTIwcHJlY2lzaW9uJTIwY3V0LCUyMHJpY2hseSUyMGZhY2V0ZWQlMjBhbmQlMjBwb2xpc2hlZCUyMHRvJTIwcmVmbGVjdCUyMGxpZ2h0JTIwd2l0aCUyMGluY3JlZGlibGUlMjAnZmlyZScuJTIwVGhlJTIwRGlBbWklQzIlQUUlMjBzdG9uZSUyMGlzJTIwdGhlbiUyMGhhbmQlMjBzZXQlMjBpbiUyMHN0ZXJsaW5nJTIwc2lsdmVyJTIwYW5kJTIwcmhvZGl1bSUyMHBsYXRlZCUyMGZvciUyMGElMjBsdXh1cmlvdXMlMjBsb29rLiUzQy9zcGFuJTNFJTNDL3AlM0U=','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE96074.jpg?v=1596123948','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkxODQ2NzczNA==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE08325.jpg?v=1596123942"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">Lea Earrings</p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $49.00
                    </p>
                    <p
                      onclick="window.createNewDiv('49.00','Lea Earrings','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NDkyODE2ODY=','JTNDcCUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFVGhlc2UlMjBjb252ZXJ0aWJsZSUyMGhlYXJ0JTIwY2hhcm0lMjBlYXJyaW5ncyUyMGFyZSUyMHdhcmRyb2JlLWZyaWVuZGx5JTIwYW5kJTIwZXBpY2FsbHklMjB2ZXJzYXRpbGUuJTIwUGVyZmVjdGx5JTIwcGFpcmVkJTIwd2l0aCUyMHRoZSUyMExlYSUyME5lY2tsYWNlLiUzQy9zcGFuJTNFJTNDL3AlM0UlMEElM0NwJTNFJTNDc3BhbiUyMHN0eWxlPSUyMmZvbnQtd2VpZ2h0OiUyMDQwMDslMjIlM0UtJTIwTWFkZSUyMHdpdGglMjBTdGVybGluZyUyMFNpbHZlciUzQy9zcGFuJTNFJTNDL3AlM0UlMEElM0NwJTNFJTNDc3BhbiUyMHN0eWxlPSUyMmZvbnQtd2VpZ2h0OiUyMDQwMDslMjIlM0UlM0Mvc3BhbiUzRSUzQ3NwYW4lMjBzdHlsZT0lMjJmb250LXdlaWdodDolMjA0MDA7JTIyJTNFLSUyMDE2JTIwbW0lMjBob29wJTNDL3NwYW4lM0UlM0MvcCUzRSUwQSUzQ3AlM0UlM0NzcGFuJTIwc3R5bGU9JTIyZm9udC13ZWlnaHQ6JTIwNDAwOyUyMiUzRS0lMjA4JTIwbW0lMjBoZWFydCUzQy9zcGFuJTNFJTNDL3AlM0UlMEElM0NiciUzRQ==','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE08325.jpg?v=1596123942','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkxNzQ4NDY5NA==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="revo-embed-product-wrapper">
              <div className="revo-embed-product-outer">
                <div className="revo-embed-product-image-wrapper">
                  <img
                    className="revo-embed-product-image"
                    src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE82916.jpg?v=1596123957"
                  />
                </div>
                <div className="revo-embed-product-details-wrapper">
                  <span>
                    <p className="revo-embed-product-name">
                      Princesse Earrings
                    </p>
                  </span>
                  <span>
                    <p className="revo-embed-product-price">
                      <s />
                      $45.00
                    </p>
                    <p
                      onclick="window.createNewDiv('45.00','Princesse Earrings','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU1NDk0NTA0NjEzMzQ=','JTNDZGl2JTNFRGlBbWklQzIlQUUlM0MvZGl2JTNFJTBBJTNDZGl2JTNFU3RlcmxpbmclMjBTaWx2ZXIlM0MvZGl2JTNFJTBBJTNDZGl2JTNFUmhvZGl1bSUyMHBsYXRlZCUzQy9kaXYlM0U=','https://cdn.shopify.com/s/files/1/0415/3199/8358/products/TE82916.jpg?v=1596123957','75591451188426','75591760926182','borderfreefinancial','75591884453641329481883401267_1664188062866','Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkyMTEyMTk0Mg==','1','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','portrait')"
                      className="revo-embed-product-price revo-embed-shop-now"
                    >
                      Shop now ›
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="revo-embed-product-scroll-div"
            style={{ display: "flex" }}
          >
            <button
              className="revo-embed-product-scroll-button right"
              onclick="window.slide('right',this);fetchProducts(this,75591451188426,1,true,'https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4',this.parentNode.childNodes[1].currentTime,'portrait')"
            />
          </div>
        </div>
      </div>
      <div className="revo-embed-product-description-drawer active">
        <div className="revo-embed-product-description-drawer-data">
          <div className="revo-embed-close-product-drawer">
            <div className="product-heading">
              {" "}
              <h3>Products</h3>
            </div>
            <div
              className="revo-embed-close-icon"
              onclick="window.removeNewDiv('75591451188426','portrait')"
            >
              X
            </div>
          </div>
          <div className="revo-embed-image-and-description-parent">
            <div className="image-brief-details">
              <img
                className="revo-embed-product-description-image"
                src="https://cdn.shopify.com/s/files/1/0415/3199/8358/products/FB80011-STRAIGHT.jpg?v=1596123917"
              />
              <div className="revo-embed-image-describe">
                <h3>Romy Bracelet</h3>
                <p>$35.00</p>
              </div>
            </div>
            <h2 className="revo-embed-description-header">Description</h2>
            <div className="revo-embed-product-description">
              <p>
                Stylish and stackable stretch&nbsp;bracelet with shiny crystal
                beads.
              </p>
            </div>
          </div>
          <button
            className="revo-embed-add-to-cart-button"
            onclick="window.revoembedaddToCart('Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNTUwMjkwOTkxNTI4Ng==',this);"
          >
            ADD TO CART
          </button>
          <button
            className="revo-embed-go-to-cart-button"
            onclick="window.revoembedgoToCart('75591451188426','https://d3v9me23j3jq5o.cloudfront.net/borderfreefinancial/75591760926182/Uploaded%20Files/production%20ID%204974760.mp4','0','1','portrait');"
          >
            GO TO CART
          </button>
          <div id="snackbar">Romy Bracelet added to cart.</div>
        </div>
      </div>
      <div className="revo-embed-cart-info-drawer" />
    </div>
  );
};
