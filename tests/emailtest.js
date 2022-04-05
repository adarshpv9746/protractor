let loginpage = require('../pages/login');
let dashpage = require('../pages/dashboard');
let editpatpage = require('../pages/editpatient');
let edittxpage = require('../pages/edittxpage');
const dashboard = require('../pages/dashboard');
let email_array = [".academy", ".accountant", ".accountants", ".actor", ".adult", ".africa", ".agency", ".airforce", ".apartments", ".app", ".army", ".art", ".asia", ".associates", ".attorney", ".auction", ".audio", ".auto", ".baby", ".band", ".bar", ".bargains", ".beer", ".berlin", ".best", ".bid", ".bike", ".bingo", ".bio", ".biz", ".black", ".blackfriday", ".blog", ".blue", ".boston", ".boutique", ".build", ".builders", ".business", ".buzz", ".cab", ".cafe", ".cam", ".camera", ".camp", ".capital", ".car", ".cards", ".care", ".careers", ".cars", ".casa", ".cash", ".casino", ".catering", ".center", ".ceo", ".chat", ".cheap", ".christmas", ".church", ".city", ".claims", ".cleaning", ".click", ".clinic", ".clothing", ".cloud", ".club", ".coach", ".codes", ".coffee", ".college", ".com", ".community", ".company", ".computer", ".condos", ".construction", ".consulting", ".contact", ".contractors", ".cooking", ".cool", ".country", ".coupons", ".courses", ".credit", ".creditcard", ".cricket", ".cruises", ".cymru", ".cyou", ".dance", ".date", ".dating", ".deals", ".degree", ".delivery", ".democrat", ".dental", ".dentist", ".desi", ".design", ".dev", ".diamonds", ".diet", ".digital", ".direct", ".directory", ".discount", ".doctor", ".dog", ".domains", ".download", ".earth", ".eco", ".education", ".email", ".energy", ".engineer", ".engineering", ".enterprises", ".equipment", ".estate", ".events", ".exchange", ".expert", ".exposed", ".express", ".fail", ".faith", ".family", ".fans", ".farm", ".fashion", ".feedback", ".film", ".finance", ".financial", ".fish", ".fishing", ".fit", ".fitness", ".flights", ".florist", ".flowers", ".football", ".forsale", ".foundation", ".fun", ".fund", ".furniture", ".futbol", ".fyi", ".gallery", ".game", ".games", ".garden", ".gay", ".gdn", ".gift", ".gifts", ".gives", ".glass", ".global", ".gmbh", ".gold", ".golf", ".graphics", ".gratis", ".green", ".gripe", ".group", ".guide", ".guitars", ".guru", ".hamburg", ".haus", ".health", ".healthcare", ".help", ".hiphop", ".hockey", ".holdings", ".holiday", ".horse", ".host", ".hosting", ".house", ".how", ".icu", ".immo", ".immobilien", ".inc", ".industries", ".info", ".ink", ".institute", ".insure", ".international", ".investments", ".irish", ".jetzt", ".jewelry", ".juegos", ".kaufen", ".kim", ".kitchen", ".kiwi", ".krd", ".kyoto", ".land", ".lat", ".lawyer", ".lease", ".legal", ".lgbt", ".life", ".lighting", ".limited", ".limo", ".link", ".live", ".llc", ".loan", ".loans", ".lol", ".london", ".love", ".ltd", ".ltda", ".luxury", ".maison", ".management", ".market", ".marketing", ".mba", ".media", ".melbourne", ".memorial", ".men", ".menu", ".miami", ".mobi", ".moda", ".moe", ".mom", ".money", ".monster", ".mortgage", ".movie", ".nagoya", ".name", ".navy", ".net", ".network", ".new", ".news", ".ninja", ".nyc", ".observer", ".okinawa", ".one", ".onl", ".online", ".org", ".osaka", ".page", ".paris", ".partners", ".parts", ".party", ".photo", ".photography", ".photos", ".pics", ".pictures", ".pink", ".pizza", ".place", ".plumbing", ".plus", ".poker", ".porn", ".press", ".pro", ".productions", ".properties", ".property", ".protection", ".pub", ".racing", ".realty", ".recipes", ".red", ".rehab", ".reise", ".reisen", ".rent", ".rentals", ".repair", ".report", ".republican", ".rest", ".restaurant", ".review", ".reviews", ".rip", ".rocks", ".rodeo", ".run", ".ryukyu", ".sale", ".sarl", ".school", ".schule", ".science", ".security", ".services", ".sex", ".sexy", ".shiksha", ".shoes", ".shop", ".shopping", ".show", ".singles", ".site", ".ski", ".soccer", ".social", ".software", ".solar", ".solutions", ".soy", ".space", ".storage", ".store", ".stream", ".studio", ".study", ".style", ".sucks", ".supplies", ".supply", ".support", ".surf", ".surgery", ".sydney", ".systems", ".tattoo", ".tax", ".taxi", ".team", ".tech", ".technology", ".tel", ".tennis", ".theater", ".theatre", ".tienda", ".tips", ".tires", ".today", ".tokyo", ".tools", ".top", ".tours", ".town", ".toys", ".trade", ".training", ".travel", ".tube", ".university", ".uno", ".vacations", ".vegas", ".ventures", ".vet", ".viajes", ".video", ".villas", ".vin", ".vip", ".vision", ".vodka", ".vote", ".voting", ".voto", ".voyage", ".wales", ".watch", ".webcam", ".website", ".wedding", ".wiki", ".win", ".wine", ".work", ".works", ".world", ".wtf", ".xn--3ds443g", ".xn--6frz82g", ".xxx", ".xyz", ".yoga", ".yokohama", ".zone"];

describe('Basic check for',function(){
    browser.manage().window().maximize();
    it('Login to orthocatapult',function(){
        
        loginpage.get('https://qa.practicecatapult.com');
        loginpage.username('mac');
        loginpage.password('Mac@123');
        loginpage.login_button();
        browser.sleep(100);
    });
    for (let i = 0; i < email_array.length; i++) {
    it('click add patient button on dashboard',function(){
        dashpage.addp_button();
        //dashpage.firstpat();
        browser.sleep(100);
    });

    it('filling detals and submitting them on Edit patient page',function(){
        editpatpage.add_patient(email_array[i]);
        dashpage.gotodash();
        //browser.get('https://qa.practicecatapult.com/patient/patient-file-add');
        browser.sleep(100);
    });}

    //it('filling the tx plan and submitting', function(){
    //    edittxpage.submittx();
    //});


})
