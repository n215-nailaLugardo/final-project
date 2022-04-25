//this info stimulates getting data from
//a database
var homeContent = `

<div class="banner">
    <div class="bannerText">
        <h1>Header goes here</h1>
        <p class="pinkTxt">Less important text goes here</p>
        <p> <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br>
        Fugiat aliquid minus nemo sed est.</i></p>
        <button>READ MORE</button>
    </div>
</div>
    
<div class="quoteContent">
    <div class="quoteTxt">
        <p class="quote">“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo”</p>
        <p class="quoteName">John Smith</p>
        <p class="quoteDesc">Corporation CEO, books author.</p>
    </div>
</div>
    
<div class="eventsContent">
    <div class="eventsHeader">
        <p>UPCOMING EVENTS:</p>
        <hr>
    </div>
    
    <div class="eventInfoRow">
        <div class="eventInfo">
        <div class="eventBoxDate">
            <p class="eventDateDay">06</p>
            <p class="eventDateMonth">JUN</p>
    </div>
    
        <div class="eventsTxt">
            <p class="whiteTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
            </p>
        </div>
    
        
        </div>
    
        <div class="eventInfo">
            <div class="eventBoxDate">
                <p class="eventDateDay">30</p>
                <p class="eventDateMonth">JUL</p>
            </div>
    
            <div class="eventsTxt">
                <p class="whiteTxt">
                    Sed et persipiatis unde omnis iste natus
                </p>
    
                <p class="pinkTxt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                </p>
            </div>
    
            
        </div>
    
        <div class="eventInfo">
            <div class="eventBoxDate">
                <p class="eventDateDay">30</p>
                <p class="eventDateMonth">AUG</p>
            </div>
    
            <div class="eventsTxt">
                <p class="whiteTxt">
                    Sed et persipiatis unde omnis iste natus
                </p>
    
                <p class="pinkTxt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                </p>
            </div>
    
            
        </div>
    
        <div class="eventInfo">
            <div class="eventBoxDate">
                <p class="eventDateDay">23</p>
                <p class="eventDateMonth">NOV</p>
            </div>
    
            <div class="eventsTxt">
                <p class="whiteTxt">
                    Sed et persipiatis unde omnis iste natus
                </p>
    
                <p class="pinkTxt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                </p>
            </div>
    
            
        </div>
    
        <div class="eventInfo">
            <div class="eventBoxDate">
                <p class="eventDateDay">23</p>
                <p class="eventDateMonth">DEC</p>
            </div>
    
            <div class="eventsTxt">
                <p class="whiteTxt">
                    Sed et persipiatis unde omnis iste natus
                </p>
    
                <p class="pinkTxt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid temporibus quos aspernatur
                </p>
            </div>
    
            
        </div>
    </div>
    </div>`;

var aboutContent = `
        <div class="aboutContent">
            <div class="historyBanner">
                <p class="historyHeader" >OUR HISTORY:</p>
                <hr>
            </div>

            <p class="historyTxt">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>`;
        
var galleryContent = `<div class="galleryContent">
<div class="galleryHeader">GALLERY:</div>
<hr>

<div class="galleryRow1">
    <div class="yellowImg" <a id="yellowGallery" href="#"></a></div>
    <div class="pinkImg"></div>
    <div class="greenImg"></div>
</div>

<div class="galleryRow2">
    <div class="purpleImg"></div>
    <div class="turquoiseImg"></div>
</div>
</div>`;

var blogContent = `<div class="blogContent">
<div class="blogHeader">
    <p>BLOG:</p>
    <hr>
</div>

<div class="blogRow">
    <div class="blogPost">
        <div class="blogVisuals">
            <div class="blogDate">
                <p class="blogDateDay">06</p>
                <p class="blogDateMonth">JUN</p>
            </div>
    
            <div class="blogImg"></div>
        </div>
    
        <div class="blogTxt">
            <p class="blackTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>

    <div class="blogPost">
        <div class="blogVisuals">
            <div class="blogDate">
                <p class="blogDateDay">30</p>
                <p class="blogDateMonth">JUL</p>
            </div>
    
            <div class="blogImg"></div>
        </div>
    
        <div class="blogTxt">
            <p class="blackTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>
</div>

<div class="blogRow">
    <div class="blogPost">
        <div class="blogVisuals">
            <div class="blogDate">
                <p class="blogDateDay">30</p>
                <p class="blogDateMonth">AUG</p>
            </div>
    
            <div class="blogImg"></div>
        </div>
    
        <div class="blogTxt">
            <p class="blackTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>

    <div class="blogPost">
        <div class="blogVisuals">
            <div class="blogDate">
                <p class="blogDateDay">23</p>
                <p class="blogDateMonth">NOV</p>
            </div>
    
            <div class="blogImg"></div>
        </div>
    
        <div class="blogTxt">
            <p class="blackTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>
</div>

<div class="blogRow">
    <div class="blogPost">
        <div class="blogVisuals">
            <div class="blogDate">
                <p class="blogDateDay">23</p>
                <p class="blogDateMonth">DEC</p>
            </div>
    
            <div class="blogImg"></div>
        </div>
    
        <div class="blogTxt">
            <p class="blackTxt">
                Sed et persipiatis unde omnis iste natus
            </p>
    
            <p class="pinkTxt">
                Sed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
            </p>
        </div>
    </div>
</div>
</div>`;

var contactContent = `<div class="contactContent">
<div class="contactHeader">
    <p>
        CONTACT US:
    </p>
    <hr>     
</div>

<div class="contactMapForm">    
    <div class="contactForm">
        <input type="text" class="longBox" id="name" placeholder="Your name...">

        <input type="text" class="longBox" id="email" placeholder="Email Address...">

        <input type="text" class="longBox" id="company" placeholder="Company...">

        <input type="text" class="bigBox" id="message" placeholder="Message...">

        <br/>
        <button>SEND MESSAGE</button>
    </div>

    <div class="contactMap"></div>
</div>
</div>`;

//this function is being called from the app.js
//and it has the page name
export function modelPageName(pgName) {
    console.log(pgName);

    $("#app").html(eval(pgName));
}