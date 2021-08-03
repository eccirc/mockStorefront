import React from 'react';
import mainLogo from '../../Logos/Wear(e)YourSelf-logos_black.png';

const About: React.FC = () => {
    return (
        <div className="w-full  mx-auto bg-white heading pt-16 xl:pt-0 pb-24">
            <img className="object-cover w-1/2 mx-auto" src={mainLogo} alt="Logo" />
            <h2 className="text-4xl font-bold text-center p-8">Our Story</h2>
            <p className="text-center p-12">
                I`m baby keffiyeh kitsch shaman, art party neutra vice kickstarter kombucha prism biodiesel pinterest
                iPhone adaptogen keytar lomo. La croix pop-up hella, keytar hell of vegan kogi. Leggings pop-up celiac
                DIY. Taxidermy lyft prism asymmetrical XOXO chia. Williamsburg viral kale chips, letterpress kinfolk
                pork belly shaman dreamcatcher <br />
                <br /> Viral la croix tumeric blog fanny pack waistcoat. Art party edison bulb listicle next level,
                occupy authentic tofu ennui freegan photo booth wolf hell of ramps kickstarter. Chillwave irony tumeric,
                messenger bag disrupt before they sold out chambray kitsch kombucha crucifix jean shorts. Stumptown
                hammock master cleanse drinking vinegar tumblr. Pug shabby chic fam beard. Quinoa banh mi bicycle rights
                before they sold out glossier, street art live-edge activated charcoal truffaut try-hard sartorial
                gluten-free biodiesel cold-pressed. Next level art party chicharrones yr YOLO fanny pack chambray
                hashtag keffiyeh letterpress. Lumbersexual single-origin coffee chillwave, bitters twee palo santo
                hashtag squid try-hard meggings occupy pabst.
                <br />
                <br />
                Brunch kitsch bespoke live-edge. Etsy vexillologist plaid everyday carry taiyaki shabby chic man bun
                meggings austin listicle quinoa shoreditch truffaut distillery vaporware. Chillwave cardigan banh mi
                green juice hot chicken brunch. Schlitz williamsburg vexillologist deep v kombucha sriracha. Chartreuse
                bitters williamsburg, schlitz jianbing cray asymmetrical franzen tilde knausgaard sartorial pug vape
                mumblecore. Mumblecore glossier 8-bit air plant heirloom. Chartreuse stumptown fashion axe VHS,
                williamsburg cliche kale chips bushwick mlkshk plaid viral banjo.
            </p>
        </div>
    );
};

export default About;
