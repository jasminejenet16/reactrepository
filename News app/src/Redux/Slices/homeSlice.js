import { createSlice } from "@reduxjs/toolkit";

const homeState={
   
    data:[
        {
            newsId:1,
            newsTitle:"Texas Gov. Greg Abbott criticizes NYC for ticketing buses carrying migrants",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/05/920/518/Chinese-President-Xi-Jinping.jpg?ve=1&tl=1",
            state:"Texas",
            district:"New York",
            country:"america",
            newsType:"International",
            category:"politics",
            content:"Texas Gov. Greg Abbott criticized New York City Mayor Eric Adams over the ticketing of buses carrying migrants from his state to the so-called sanctuary city, following a state of emergency declaration in the Big Apple amid the influx The New York Police Department was seen over the weekend pulling over buses near the Port Authority that had dropped of dozens of migrants. The officers reportedly searched each bus for possible infractions, including tire treads, fluid levels and even windshield wiper placement, the New York Post reported ources told the Post the inspections were part of a ploy to find excuses to take the buses off the road and complicate the transportation of migrants caught illegally crossing the southern border into New York.",
            author:"By Louis Casiano",
            date:"12-09-2022"
        },
    
        {   
            newsId:2,
            newsTitle:"Native American group calls Chiefs' 'end racism' message 'ironic'",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/320/180/chiefs-helmets.jpg?tl=1&ve=1",
            state:"texas",
            district:"california",
            country:"america",
            newsType:"national",
            category:"sports",
            content:"A Native American group, the Not In Our Honor Coalition, protested the Kansas City Chiefs namesake before the team's game on Monday because they feel the team is mocking our culture.Rhonda LeValdo, the founder of Not In Our Honor, spoke to Fox News Digital explaining why the group needed to be present at GEHA Field at Arrowhead Stadium before the contest against the Las Vegas Raiders, especially on Indigenous Peoples Day.t is sad that even though we have won a victory with the renaming of Columbus Day to Indigenous Peoples’ Day to recognize the true history of this country, we celebrate that but also we have to deal with the KC football team perpetuating a racist stereotype all around the world and mocking our culture, LeValdo explained. ",
            author:"By Scott Thompson ",
            date:"23-09-2022"
        },
    
        {
            newsId:3,   
            newsTitle:"Democrat city official who wants to ban Blue Angels complains about criticism",
            newsImage:"https://a57.foxnews.com/hp.foxnews.com/images/2022/10/320/180/142bc1657cb349da30fc83c38134c219.jpg?tl=1&ve=1",
            state:"newyork",
            district:"texas",
            country:"america",
            newsType:"national",
            category:"politics",
            content:"The tweet elicited many replies commenting on the high cost of living and housing shortage in San Francisco, issues that spill into other cities and jurisdictions.SF is ground zero for the housing shortage in the United States, and elected officials there continue to make excuses to do anything but build enough housing to keep up with economic growth Even Redwood City Mayor Giselle Hale weighed in, noting that both of their cities are connected by their workers and residents Furthermore, many prominent politicians got their start in San Francisco before moving on to higher – and more influential – office. These include House Speaker Nancy Pelosi, U.S. Senator Dianne Feinstein, Vice President Kamala Harris, and Governor Gavin Newsom who has openly been discussed as a potential presidential candidate.",
            author:"By Bradford Betz",
            date:"29-09-2022"
        },
    
        {
            newsId:4,
            newsTitle:"Fed vice chair talks inflation, hotels hit by crime wave and more: Tuesday's 5 things to know",
            newsImage:"https://a57.foxnews.com/hp.foxnews.com/images/2022/10/320/180/2f505405caaf521b97cd9b2adb4fc90d.jpg?tl=1&ve=1",
            state:"uganda",
            district:"ukraine",
            country:"ukraine",
            newsType:"inteernational",
            category:"share market",
            content:"FED VICE CHAIR TALKS INFLATION: Federal Reserve Vice Chair Lael Brainard on Monday reiterated the U.S. central bank's plan to continue tightening monetary policy until there is clear evidence that inflation has slowed down, warning the U.S. economy will likely slow further as a result of elevated interest rates. The Fed has already raised interest rates five times this year as it tries to wrestle inflation that is still running near a 40-year high back to its 2% target goal.In its latest move, the Fed approved a third consecutive 75-basis-point rate hike, lifting the federal funds rate to a range of 3% to 3.25% – near restrictive levels. It also indicated that more super-sized increases are likely in the coming months.  ",
            author:"By Jack Durschlag",
            date:"10-10-2022"
        },
    
        {
            newsId:5,
            newsTitle:"Biden signs Inflation Reduction Act: Here's what it means for your wallet",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/08/931/506/Credible-Inflation-Reduction-Act-iStock-1147159720.jpg?ve=1&tl=1",
            state:"california",
            district:"california",
            country:"united states",
            newsType:"national",
            category:"politics",
            content:"This act was signed into law amid historically high levels of inflation. The Consumer Price Index (CPI), a measure of inflation, increased by 8.5% annually in July, according to the Bureau of Labor Statistics (BLS). The law will allocate $369 billion toward climate and energy policies, extend the Affordable Care Act to reduce the cost of health insurance and incorporate a 15% minimum corporate tax for companies that earn more than $1 billion per year.",
            author:"By Kelsey Ramirez ",
            date:"09-10-2022"
        },
    
        {
            newsId:6,
            newsTitle:"Elon Musk says he expressed 'concerns' over Ye's antisemitic tweet: 'I think he took it to heart'",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2020/07/896/504/Elon-Musk-Kanye-AP.png?ve=1&tl=1",
            state:"willington",
            district:"willington",
            country:"united states",
            newsType:"national",
            category:"entertainment",
            content:"Talked to ye today & expressed my concerns about his recent tweet, which I think he took to heart,the Tesla founder wrote.Ye was locked out of his Twitter account after sharing: Im a bit sleepy tonight but when I wake up Im going death con 3 On JEWISH PEOPLE The funny thing is I actually cant be Anti Semitic because black people are actually Jew also You guys have toyed with me and tried to black ball anyone whoever opposes your agenda.The Tesla founders statement was a follow-up to a post which had initially welcomed the rapper back to the social media platform.",
            author:"By Janelle Ash ",
            date:"07-10-2022"
        },
    
        {
            newsId:7,
            newsTitle:"Amazons Prime Day II signals holiday spending hurdles",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/720/405/prime.jpg?ve=1&tl=1",
            state:"los angels",
            district:" los angels",
            country:"unites states",
            newsType:"international",
            category:"share market",
            content:"Now we're seeing it kind of creep pretty significantly into almost mid-October here; so, that's really a factor of retailers looking to spread out the discounts and trying to kick up the buying momentum earlier,he told FOX Business.And consumers are very much open to spending in a more spread-out way in this inflationary environment. little different for retailers this year because last year and the year before you had just some really strong levels of consumer demand, and they also had cash infusions of stimulus payments and things like that helping increase their expendable income",
            author:"By Breck Dumas",
            date:"23-09-2022"
        },
    
        {
            newsId:8,
            newsTitle:"California's drought withers tomatoes, pushing grocery prices higher",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/08/192/108/TOMATOPIC2.jpg?ve=1&tl=1",
            state:"california",
            district:"california",
            country:"united states",
            newsType:"national",
            category:"sports",
            content:"The rise in food prices this year has helped drive U.S. inflation to its highest levels in 40 years. California's drought conditions, on top of Hurricane Ian ravaging citrus and tomato crops in Florida, are likely to push food costs even higher. Drought in an area known as the U.S. salad bowl has not only impacted fresh produce, but also pantry staples like pasta sauce and premade dinners.Near Firebaugh, California, Aaron Barcellos planted just a quarter of the 2,000 acres of his family's fourth generation farm. This summer, he harvested tomatoes two weeks early to prevent further drought damage.",
            author:"By Reuters",
            date:"10-10-2022"
        },
    
        {
            newsId:9,
            newsTitle:"iPhone-maker Foxconn reveals its Ohio-built electric car",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/192/108/foxtron-1.jpg?ve=1&tl=1",
            state:"texas",
            district:"texas",
            country:"united states",
            newsType:"national",
            category:"crime",
            content:"The Model B is a compact hatchback designed by famed Italian design house Pininfarina that will be produced under the Foxtron brand name at the Lordstown, Ohio, factory that Foxconn purchased last year.More details will be released on October 18, but the car is expected to compete in the sub-$30,000 range, although U.S. sales have not yet been confirmed.Foxtron is a collaboration between Foxcon and Yulon Motor company that will first launch a Chinese-made version of the vehicle.",
            author:"By Gary Gastelu ",
            date:"18-09-2022"
        },
    
        {
            newsId:10,
            newsTitle:"Delta makes it harder to qualify for Skymiles elite status",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/192/108/20179403-1000-2.jpeg?ve=1&tl=1",
            state:"new delhi",
            district:"new delhi",
            country:"India",
            newsType:"national",
            category:"sports",
            content:"Starting in 2023, the MQD threshold to achieve 2024 Gold Medallion status will increase by $2,000 to $8,000. The MQD requirements for Platinum and Diamond Medallion will also see 33% increases, changing to $12,000 and $20,000, respectively, according to Delta Air Lines.These limited SkyMiles program changes are a necessary step toward both preserving and improving the customer experience for our most loyal and engaged Members,Dwight James, senior vice president of customer engagement and loyalty, said in a statement.The travel and loyalty landscape has changed considerably since we last made changes to the earn qualifications of multiple membership tiers",
            author:"By Aislinn Murphy ",
            date:"23-09-2022"
        },
    
        {
            newsId:11,
            newsTitle:"Credit Suisse to buy back $3B in debt, sell Hotel Savoy",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/931/506/Hotel-Savoy-1.jpg?ve=1&tl=1",
            state:"afnazz",
            district:"afnazz",
            country:"afganistan",
            newsType:"national",
            category:"share market",
            content:"Credit Suisse reviews its property portfolio on a regular basis as part of its global real-estate strategy,the spokesperson said. As part of this process, the bank has decided to start a sales process for the Hotel Savoy. We will carefully assess all offers and potential investors and communicate any decision in due course The renovation will reduce the total number of rooms to 80 from 104. The rooms will be fully redesigned to offer guests more space. The Hotel Savoy's meeting and event rooms on the first floor will also be included in the renovation, and its lobby and catering concepts will be fully redesigned. A minor modification will also be made to the hotel's entrance area on Poststrasse.",
            author:"By Lucas Manfredi ",
            date:"18-02-2022"
        },
    
        {
            newsId:12,
            newsTitle:"What is 'FDPR' and why is the US using it to cripple China's tech sector?",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/11/192/108/chip.jpg?ve=1&tl=1",
            state:"uttar pradesh",
            district:"kasigaro",
            country:"India",
            newsType:"national",
            category:"crime",
            content:"The weapon? A little-known rule that enables U.S. regulators to extend their technology export control powers far beyond America's borders to transactions between foreign countries and China.The provision called the foreign direct product rule, or FDPR, was first introduced in 1959 to control trading of U.S. technologies. It essentially says that if a product was made using American technology, the U.S. government has the power to stop it from being sold - including products made in a foreign country.",
            author:"By Reuters",
            date:"05-09-2022"
        },
    
        {
            newsId:13,
            newsTitle:"NASA, SpaceX Crew-5 astronaut mission arrives at the International Space Station",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/192/108/Dock.jpg?ve=1&tl=1",
            state:"california",
            district:"california",
            country:"united states",
            newsType:"national",
            category:"crypto market",
            content:"NASA's SpaceX Crew-5 mission arrived at the International Space Station on Thursday afternoon.After Dragon's link up to the Harmony module, the hatch opened at 6:49 p.m. ET, following standard leak checks and pressurizationNASA astronauts Nicole Mann and Josh Cassada, Japan Aerospace Exploration Agency astronaut Koichi Wakata and Roscosmos cosmonaut Anna Kikina joined the Expedition 68 crew. ",
            author:"By Julia Musto ",
            date:"29-09-2022"
        },
    
        {
            newsId:14,
            newsTitle:"Betty White auction brings in more than $4 million during 3-day event",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/192/108/5efc8f62-Getty_BettyWhite.jpg?ve=1&tl=1",
            state:"rajasthan",
            district:"wadia",
            country:"India",
            newsType:"national",
            category:"entertainment",
            content:"Juliens Auctions offered more than 1,500 lots from the TV star's life and career during a three-day event in Beverly Hills, California, and online beginning Sept. 23. The auction, which was estimated to bring in about $600,000, made more than $4 million.But it wasnt just Golden Girls memorabilia that collectors were after. Items from White’s California homes, including furniture, artwork, clothing and more also sold quickly. The yellow-painted front door from White's longtime Brentwood residence sold for $10,000. A 1950s oil painting of White wearing a red and white dress with opera gloves sold for $43,750. A large decorative needlepoint wall hanging of exotic birds and butterflies brought in $22,400. A sapphire and diamond pendant necklace worn on The Mary Tyler Moore Show sold for $35,200, or 35 times its original estimate.",
            author:"By Stephanie Nolasco ",
            date:"19-10-2022"
        },
    
        {
            newsId:15,
            newsTitle:"Nancy Pelosi booed during surprise appearance at NYC music festival, videos appear to show",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/192/108/nancy-pelosi-priyanka-chopra-1.jpg?ve=1&tl=1",
            state:"kerala",
            district:"palacaud",
            country:"India",
            newsType:"national",
            category:"politics",
            content:"Pelosi, wearing a white pantsuit with a matching scarf, took to the stage of NYC’s Global Citizen music festival where she was booed by those in the audience, videos on social media appear to show.After being introduced to the stage by Priyanka Chopra Jonas, an actress who is married to Nick Jonas, Pelosi briefly spoke about carbon pollution and climate change.which will be a game changer, she added, being drowned out by the crowd. It will slash carbon pollution by 40% by 2030, it will give a historic, an historic $370 billion to fight the climate crisis.Pelosi can also be heard mentioning her grandsons Paul and Thomas were in the audience.",
            author:"By Lawrence Richard ",
            date:"10-09-2022"
        },
    
        {
        newsId:16,
        newsTitle:"Elon Musk suffers from 'histrionic personality disorder,' Politico writer diagnoses",
        newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/05/720/405/Elon-musk-vote-choice.jpg?ve=1&tl=1",
        state:"texas",
        district:"california",
        country:"united states",
        newsType:"national",
        category:"entertainment",
        content:"Although the medical literature is silent on the subject of excessive procreation and HPD — Musk has birthed nine children in collaboration with four different uteruses What better venue to promote his plan than on Twitter, where on Oct. 3 he proposed a 43-word peace plan that essentially sounded as if it had been scripted by Vladimir Putin, an HPD case if ever there was one, while sitting at his long table Various media pundits previously attacked Musk for his social media presence, particularly after he confirmed that he would move forward with his deal to purchase Twitter. Some have even warned that his purchase of Twitter could lead to the end of democracy.",
        author:"By Lindsay Kornick",
        date:"4-10-2022"
        },
    
        
        {
            newsId:17,
            newsTitle:"Clay Travis slams Fetterman's refusal to face conservative media, says he should bow out",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/Fetterman-POLS.jpg?ve=1&tl=1",
            state:"uttar pradesh",
            district:"wadia",
            country:"Ameica",
            newsType:"national",
            category:"share market",
            content:"Citing his current recovery from a Spring stroke, Travis criticized Fetterman's ability to answer MSNBC reporter Dasha Burns' questions even with the help of a desktop computer screen and captioning apparatus.During a forum with the editorial board of PennLive, the online publication of the Harrisburg Patriot-News in the state's capital, Fetterman confirmed he will not consider joining Hannity anytime soon.Lord pointed out Fetterman would have easy access to WHP radio in Harrisburg, where Hannity's radio show is locally syndicated.",
            author:"By Charles Creitz ",
            date:"10-09-2022"
         },
    
            
        {
            newsId:18,
            newsTitle:"More Americans are buying and spending crypto-currency, leading to a big spike in crypto-crime.",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/QUINTON-SIMON-MISSING-SAVANNAH-GEORGIA.jpg?ve=1&tl=1",
            state:"texas",
            district:"hongo",
            country:"america",
            newsType:"international",
            category:"crypto market",
            content:"It's been a turbulent year for crypocurrency, with prices fluctuating wildly and crypto-crime on the rise. In 2021, thieves stole about 11 billion dollars worth of bitcoin and other online currencies - five times as much as in 2020. And criminals are increasingly targeting both large companies and infrastructure.  For example, the Colonial Pipeline ransomware attack resulted in a multi-million dollar payout.And individual scams are also on the rise: an estimated 34 million Americans own cryptocurrency, and its payment value is expected to spike about 70 percent this year alone, prompting officials to urge users to watch out for scammers",
            author:"By David Nath",
            date:"04-10-2022"
            },
    
            
        {
            newsId:19,
            newsTitle:"Apple boosting employee perks — except for sole union shop: report",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/07/720/405/001f7e4e-1000.jpeg?ve=1&tl=1",
            state:"new delhi",
            district:" new delhi",
            country:"India",
            newsType:"international",
            category:"crypto market",
            content:"Workers at the Apple store in Towson voted in June by a nearly 2-1 margin to seek entry into the International Association of Machinists and Aerospace Workers Coalition of Organized Retail Employees (IAM CORE) union, which is set to begin formal negotiations with the company soon.that gives our IAM CORE members the proper respect and dignity at work and sets the standard in the tech industry",
            author:"By Breck Dumas",
            date:"10-10-2022"
            },
    
            
        {
            newsId:20,
            newsTitle:"Home prices see forceful deceleration in July: Case-Shiller",
            newsImage:"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/09/931/506/Credible-home-prices-iStock-901883660.jpg?ve=1&tl=1",
            state:"uttarkand",
            district:"mussori",
            country:"India",
            newsType:"national",
            category:"share market",
            content:"Home prices increased by 15.8% annually in July, down significantly from the annual increase of 18.1% in June, Case-Shiller's National Home Price NSA index said. On a monthly basis, home prices fell by 0.3% from June.Annual home price gains were the strongest in Tampa, Miami and Dallas, which saw increases of 31.8%, 31.7% and 24.7%, respectively.If you want to take advantage of your increased home value, you could consider pulling money out of your home using a cash-out refinance. Visit Credible to find your personalized interest rate in minutes without affecting your credit score.",
            author:"By Kelsey Ramirez",
            date:"10-08-2022"
            },
    
            
        {
            newsId:21,
            newsTitle:"10 common cryptocurrency terms you need to know",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/08/720/405/Bitcoin-Cryptocurrency-Reporting-Requirements-Infrastructure-Bill.jpg?ve=1&tl=1",
            state:"andra pradesh",
            district:"andra",
            country:"India",
            newsType:"national",
            category:"crypto market",
            content:"I got so many questions from my readers and national radio show listeners that I wrote an eBook about crypto to help. I demystify digital currency, mining, and how to get started trading. Tap or click here to get your copy on Amazon. Despite Bitcoin launching way back in 2009, it’s only until recently that you can’t turn on the news or browse the web without coming across some mention of cryptocurrency.Before we get started, know this is not financial advice. The crypto world is volatile, and you should never risk money you aren't comfortable losing. Now, let's take a look at some of the most common lingo.",
            author:"By Kim Komando",
            date:"10-03-2022"
            },
    
            
        {
            newsId:22,
            newsTitle:"Braves tie up NLDS against Phillies with big sixth inning",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/riley.jpg?ve=1&tl=1",
            state:"texas",
            district:"texas",
            country:"america",
            newsType:"national",
            category:"sports",
            content:"That was the only runner in scoring position until the bottom of the sixth inning - with two outs, Wheeler plunked Ronald Acuna Jr. and walked Dansby Swanson. With two strikes, Matt Olson squeaked one under the glove of first baseman Rhys Hoskins to finally turn the scoreboard on and give the Braves a 1-0 lead.The Braves went to the bullpen in the seventh inning after Wright gave them six scoreless, allowing just two hits and a walk while striking out six. But no matter who pitched, it was no match for the Phillies. A.J. Minter, Raisel Iglesias and Kenley Jansen combined for three scoreless frames in relief.",
            author:"By Ryan Morik",
            date:"10-02-2022"
            },
    
            
        {
            newsId:23,
            newsTitle:"Brittney Griner's lawyer says WNBA star fears she may never be released from Russian prison",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/09/720/405/Brittney-Griner.jpg?ve=1&tl=1",
            state:"calofornia",
            district:"california",
            country:"united states",
            newsType:"national",
            category:"crime",
            content:"The Biden administration reportedly talked about a potential prisoner swap to free her and another American held in a Russian jail, Paul Whelan. But Griner's lawyer, Alexandr D. Boykov said he spoke with her Tuesday and said she is far from hopeful. She is not yet absolutely convinced that America will be able to take her home,Boykov said in an interview with the New York Times. She is very worried about what the price of that will be, and she is afraid that she will have to serve the whole sentence here in Russia",
            author:"By Chantz Martin",
            date:"12-10-2022"
            },
    
            
        {
            newsId:24,
            newsTitle:"Chicago woman charged with dismembering her landlord found in freezer after getting eviction notice",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/Chi-killing.jpg?ve=1&tl=1",
            state:"chicago",
            district:"washington",
            country:"united states",
            newsType:"national",
            category:"crime",
            content:"The residents were very cooperative. When they heard the scream, when they woke up in the morning, they immediately started texting the victim … started calling the victim, Chicago Police Chief of Detectives Brendan Deenihan said Wednesday. The victim didn't answer. There were some texts that were sent back from the victim's phone. It appears from what we know now that the defendant was sending texts from the victim's phone and not answering it When officers arrived at the home, they saw Kolalou walking toward a tow truck paid for by Walker's credit card, police said. The other tenants said they were afraid of Kolalou.",
            author:"By Louis Casiano",
            date:"5-09-2022"
            },
    
            
        {
            newsId:25,
            newsTitle:"Missing Georgia toddler Quinton Simon likely dead; police name mother as 'prime suspect'",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/QUINTON-SIMON-MISSING-SAVANNAH-GEORGIA.jpg?ve=1&tl=1",
            state:"georgia",
            district:"georgia",
            country:"united states",
            newsType:"national",
            category:"crime",
            content:"Leilani Simon, 22, was spotted leaving her family’s Savannah house on Wednesday afternoon before returning soon after. It was the first time she had been publicly seen since her son's disappearance The department said more details would be given in a press briefing at a time to be decided on Thursday and that no other information will be released until then.His grandparents, Thomas and Billie Jo Howell, told WSAV-TV earlier this week they are Quinton’s and his 3-year-old brother’s legal guardians",
            author:"By Brie Stimson ",
            date:"20-10-2022"
            },
    
            
        {
            newsId:26,
            newsTitle:"Texas correctional officer arrested for allegedly trying to smuggle fentanyl, PCP into prison",
            newsImage:"https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/720/405/par.jpeg?ve=1&tl=1",
            state:"Georgia",
            district:"Atlanta",
            country:"United States",
            newsType:"national",
            category:"crime",
            content:"Authorities stopped her then located an additional 30.5 ounces of PCP and five ounces of liquid fentanyl in her vehicle, the Texas Departmnet of Criminal Justice said.PCP, or phencyclidine, is a hallucinogen that comes in liquid, powder and capsule forms. Fentanyl is an opioid that is up to 50 times more powerful than heroin and has been driving the latest wave of America's opioid crisis. ",
            author:"By Paul Best ",
            date:"12-10-2022"
            },

    ],
    
    bookmark:[ ]
   
}

export const homeSlice=createSlice({
    name:'home',
    initialState:homeState,
    reducers:{

     setBookmark:(state,action)=>{
        state.bookmark=[...state.bookmark,action.payload]
     },

     setdeletebook:(state,action)=>{
        state.bookmark=action.payload
     }

   }
})

export default homeSlice.reducer
export const {setBookmark,deletebookmark,setdeletebook} =homeSlice.actions