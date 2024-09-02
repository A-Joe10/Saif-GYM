window.onload = ()=>{
    renderHome();
}
const main = document.getElementById('main');
const container = document.createElement('div');
container.className = 'container';
main.append(container);
// Start toggle active on bars
const bars = document.querySelector('.bars');
bars.addEventListener('click',()=>{
    bars.classList.toggle('active');
})
// End toggle active on bars


//Start render home
const renderHome = ()=>{
    console.log(main);
    main.innerHTML = '';
    main.innerHTML = `
    <section class="landing" id='landing'>
            <div class="container">
                <div class="landing-content">
                    <div class="coach-title">
                        <div class="coach-photo">
                            <img src="images/coach.jpeg" alt="">
                        </div>
                        <div class="landing-text">
                            <h1>Transform into a better verstion of <span>YOU</span></h1>
                            <h2>Unlock your fullest body potential <br><span>Naturally</span><br> in 12 weeks!</h2>
                            <ul class="landing-info">
                                <li><i class="fa-solid fa-angles-right"></i> burn fats <i class="fa-solid fa-angles-left"></i></li>
                                <li><i class="fa-solid fa-angles-right"></i> gain muscles <i class="fa-solid fa-angles-left"></i></li>
                                <li><i class="fa-solid fa-angles-right"></i> increase your level of endurance and fitness <i class="fa-solid fa-angles-left"></i></li>
                                <li><i class="fa-solid fa-angles-right"></i> boost your performance in individual sports <i class="fa-solid fa-angles-left"></i></li>
                            </ul>
                        </div>
                    </div>
                    <div class="view-more">
                        <a href="#prices">Let's Start Now <i class="uil uil-angle-double-down"></i></a>
                    </div>
                </div>
            </div>
            <!-- add button for price -->
        </section>
        <section class="book" id="book">
            <div class="container">
                <div class="book-content">
                    <div class="book-text">
                        <h2>Acquire the knowledge and the practical application of it and train yourself without a coach through:</h1>
                        <p>Strength training program design online workshop & E-book </p>
                        <span>“Arabic version”</span>
                        <a class="read-more-btn" href="#book">know more about it 💪</a>
                    </div>
                    <div class="book-photo">
                        <img src="images/book.png" alt="">
                    </div>
                </div>
                <!-- add button to go course content -->
            </div>
        </section>
        <section class="Testmonials" id="Testmonials">
            <h1 class="section-header">Transformations</h1>
            <div class="container">
                <div class="testmonials-content">
                    <!-- <img src="images/trans/my_transformation.jpeg" alt=""> -->
                    <div class="test-photo">
                        <img src="images/trans/mostafa_khaled (Custom).jpeg" alt="">
                    </div>
                    <div class="test-photo">
                        <img src="images/trans/youssef_essam (Custom).jpeg" alt="">
                    </div>
                    <div class="test-photo">
                        <img src="images/trans/mostafa_khwanky (Custom).jpeg" alt="">
                    </div>
                    <div class="test-photo">
                        <img src="images/trans/ahmed_labib.jpeg" alt="">
                    </div>
                </div>
            </div>
            <!-- add button to go to price -->
        </section>
        <section class="feedbacks">
            <h1 class="section-header">Feedbacks</h1>
            <div class="container">
                <div class="test-feedback">
                    <div class="feedback">
                        <h2 class="card-header">mostafa khaled</h2>
                        <p class="feedback-p" dir="rtl">انا نزلت اتمرنت النهاردة وبتصور بعد التمرين لقيت فرق ابن لذينة، الدهون كلها نزلت والstrengh زاد وقدرة التحمل، حتى نفسي اتحسن انا كنت بنهج وانا بطلع السلم، دلوقتى انا بجرى 4 و5 كيلو ومبحسش بحاجة الدنيا ايزى خالص..
                            عايز اشكرك اوى بجد انت مش بس غيرت شكلى، لكن كمان الفيتنس بتاعى وقدرات جسمى غير العادات اللى قدرت أبنيها معاك والحاجات اللى اتعلمتها منك..
                            تسلم ي كوتش ع المجهود ده  والله انا اتحولت معاك حرفيا!
                            </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">youssef essam</h2>
                        <p class="feedback-p" dir="rtl">"شكرا جدا ليك يا كابتن سيف بجد حقيقي مش عارف اقولك ايه..
                            من الناس القليلة جدا اللي فاهمة فالمهنة دي واللي عارفة بتعمل ايه ومش مجرد كلام انت حافظه من حد لا واضح انك اتعلمت كتير وقريت كتير وبتدي كل واحد حسب احتياج جسمه وحسب هدفه وعلي رأي القاعدة بتاعتنا " اهدافك غير اهدافي"
                            بس حقيقي انا ياما اتمرنت وياما لعبت لوحدي او مع ناس ووصلت لنتايج بس مكانتش بالسرعة دي ولا بالنتائج دي خااالص
                            </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">Mohamed Abo hiba</h2>
                        <p class="feedback-p" dir="rtl">صباح الخير ي كوتش.. 
                            عايز اقولك انى اتطورت جامد اوى اوى بسبب التمرين بتاعك، انا اول مرة يبقى شكلى كده ف المراية خصوصا ظهرى اتطور اوى وبقى فيه تفاصيل كده عمرى م كنت بشوفها قبل كده.. ربنا يباركلك ي كابتن بجد انا اتطورت معاك ف حاجات كتير اوى حقيقي مش بس الشكل واتعلمت منك كتير
                            </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">ahmed labib</h2>
                        <p class="feedback-p" dir="rtl">الصراحة انا كنت جي من فترة علاج كبيرة وكان هدفي زيادة الكتلة العضلية وان اوزاني تزيد ف الجيم لاني اوزاني كانت ضايعه خالص كان عندي ضعف عام عموما بسبب فترة العلاج كان وزني ٣٥كيلوا تقريبا وبفضل ربنا ثم كابتن سيف وصبره معايا الصراحة ومتابعته معايا اول باول وصلنا لتحول كبير اوي اوي ف ٣ شهور وزني وصل ٧٠ كيلوا ومش دهون واوزاني بقيت في حته تانية وزيدنا اكتر من ٩ كيلوا عضل واللياقة البدانية عليت جدا والطاقة زادت ف التمرين بقيت اتمرن وقت اكتر </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">Rawan ashraf</h2>
                        <p class="feedback-p" dir="rtl">"والله ياسيف مكنش فى احسن من لحظة ان لبسي كلوا بقى واسع وابتديت اصلا البس لبس مکنش بیجی مقاسی فبجد مبسوطة انى معاك وصلت للنتيجة دى وانا مش حاسة لا بضغط ولا بارهاق فى الدايت.. بجد شكرا و البلان بتاعتك سواء الدايت او تمرين سهلة وواضحة فبجد شكرا لذوقك وتعاونك معايا بجد مندمتش خالص انى اخدت الخطوة دى معاك "</p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">Salma Khaled </h2>
                        <p class="feedback-p" dir="rtl">حقيقي يا سيف أنت كوتش شاطر أوي ومجتهد وفاهم وصبور "انك تستحمل كل عمايلي ده في حد ذاته يتحط في السي في بتاعك " ومرن جداً ودي بالنسبالي حاجه مهمه اوي عشان أقدر اتكيف وأرتاح في النظام اللي همشي عليه..
                            وكمان مبتفوتش حاجه مركز في كل حاجه وبتحسب كل حاجه، خسيت في فترة صغيرة أوي معاك ال7ك ماخدوش وقت بصراحه وكمان أنا طبعاً عندي أنيميا وليلة ف الدايت كان متوازن ومشبع ومأثرش عليا بأى شكل 
                            </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">Manar elsayed </h2>
                        <p class="feedback-p" dir="rtl">"كابتن سيف صباح الفل
                            انا حبه اوجهلك تحية وشكر علي شطارتك ومجهودك معايا
                            انا قبل ما ابقي متابعة معاك مكنتش بتطور ولا بتحسن ومكنتش ماشية علي نظام غذائي ولا كنت فاهمة الدنيا خالص
                            لكن لما تابعت معاك الموضوع اختلف معايا ١٨٠ درجة، حقيقي بشكرك علي كل نصايحك لان هي اللي فرقت معايا و حبه اشكرك كمان علي طريقتك و تشجعيك لاني ف الاول كنت خايفة بس حقيقي بعد كدا هثق ف كل كلمة بتقولها وانا مغمضة
                            </p>
                    </div>
                    <div class="feedback">
                        <h2 class="card-header">Lana Ahmed </h2>
                        <p class="feedback-p" dir="rtl">أنا قبل م ابدا مكونتش بشوف ولا عظمه ظاهره ف جسمى، دلوقتي عظمی بدا يبان و بشكل ملحوظ و رجلي بدأت تترسم و حتى بطني كانت مليانه بطريقه اوفر و كانت بتدايقني دلوقتي نوعا ما بقيت flat بس ناقص تتشد مش اكتر
                            ف حقيقي  في فرق ملحوظ  جدا، كمان الشكل اللي انا فيه ده دلوقتي عمري موصلتله مع أي دايت ولا اي تمرين بصراحة .. شكرا جدا ي كوتش 
                            </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="lets-start" id="prices">
            <h1 class="section-header">Let's Start</h1>
            <p class="section-sub-header">Achieve the best result, with the least effort and within a minimal time</p>
            <div class="container">
                <div class="lets-start-content">
                            <div class="box">
                                <div class="price">
                                    <h2>Nutrition bundle</h2>
                                    <p class = 'first-p'><span class="dolar">EG</span> 750 <span class="mo">1 Month</span></p>
                                    <p><span class="dolar">EG</span> 500 <span class="mo">1 Month</span></p>
                                </div>
                                <div class="features">
                                    <p>A diet plan designed for your purpose </p>
                                    <p>cooking book</p>
                                    <p>recommendation for supplements for your purpose and budget </p>
                                    <p>Weekly follow-up with me personally and change the program if necessary</p>
                                    <p>Answering inquiries on a daily basis 24/7</p>
                                </div>
                                <button>Start Now!</button>
                            </div>
                            <div class="box">
                                <div class="price">
                                    <h2>workout plan</h2>
                                    <p class = 'first-p'><span class="dolar">EG</span> 750 <span class="mo">1 Month</span></p>
                                    <p><span class="dolar">EG</span> 500 <span class="mo">1 Month</span></p>
                                </div>
                                <div class="features">
                                    <p>Training program <br>(gym and Cardio workouts) </p>
                                    <p>Videos explaining the exercise included</p>
                                    <p>Weekly follow-up with me personally and change the program if necessary</p>
                                    <p>Answering inquiries on a daily basis 24/7 </p>
                                    
                                </div>
                                <button>Start Now!</button>
                            </div>
                            <div class="box">
                                <div class="price">
                                    <div class="most_popular">
                                        <p>+ Free Month</p>
                                      </div>
                                    <h2>full experience program  </h2>
                                    <p class = 'first-p'><span class="dolar">EG</span> 1800 <span class="mo">3 Month</span></p>
                                    <p><span class="dolar">EG</span> 1500 <span class="mo">3 Month</span></p>
                                </div>
                                <div class="features">
                                    <p>All the benefits of ultimate training program </p>
                                    <p>The book of the frequently asked questions, every possible question, comes to mind </p>
                                    <p>The resistance-training program design E-book</p>
                                    
                                </div>
                                <button>Start Now!</button>
                            </div>
                            <div class="box">
                                <div class="price">
                                    <h2>ultimate Training program </h2>
                                    <p class = 'first-p'><span class="dolar">EG</span> 1500 <span class="mo">3 Month</span></p>
                                    <p><span class="dolar">EG</span> 1250 <span class="mo">3 Month</span></p>
                                </div>
                                <div class="features">
                                    <p>Training program <br>(gym and Cardio workouts) </p>
                                    <p>Videos explaining the exercise included</p>
                                    <p>Progression sheet to check the weights progression from the week to another</p>
                                    <p>A diet plan designed for your purpose </p>
                                    <p>recommendation for supplements for your purpose and budget </p>
                                    <p>Weekly follow-up with me personally and change the program if necessary</p>
                                    <p>Answering inquiries on a daily basis 24/7</p>
                                </div>
                                <button>Start Now!</button>
                            </div>
                </div>
            </div>
        </section>
        
        <section id="about" class="meet-your-coach">
            <h1 class="section-header">Meet Your <span>Coach</span></h1>
            <div class="container">
                <div class="meet-content">
                    <div class="heading">
                        <h1>Believe in yourself and <span>transform</span> into the best version of you!</h1>
                        <a class="read-more-btn" href= "#aboutsec" onclick= "renderAbout()"> know more about Me 💪</a>
                    </div>
                    <div class="meet-your-coach-text">
                        <p>We work to be our best selves—physically, mentally, and professionally—in order to achieve our life's mission..
                            If you’re willing to go through this joyfull journey, let me tell you that Self-development begins with making an investment in your health and unlocking your body fullest potentials..
                            </p>
                        <p>This will provide you with the drive to work really hard, the physique that boosts your self-esteem, and a strong opportunity to make an excellent first impression wherever people see you.
                            Let me help you through the journey..</p>
                        </div>
                    </div>
            </div>
        </section>
        <section class="contact" id="contact">
            <h1 class="section-header">Send me a message</h1>
            <p class="section-sub-header">If you have any inquires please don't hesitate to send me an email 💖💪</p>
            <div class="container">
                <div class="contact-content">
                    <div class="contact-image">
                        <img src="images/contact photo.jpeg" alt="">
                    </div>
                    <form action="" class="contact-form">
                        <input type="text" name="name" id="name" placeholder="Name" required>
                        <input type="email" name="email" id="email" placeholder="Email" required>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    `
}
//End render home
// Start render about
const renderAbout = ()=>{
    main.innerHTML='';
    window.scrollTo(0,0);
    main.innerHTML = `
    <section class=" about about1" id="aboutsec">
            <div class="about-header"><h1 class="section-header">about me</h1></div>
            <div class="container">
                <div class="about-content">
                    <div class="about-photo">
                        <img src="images/about.jpeg" alt="about photo">
                    </div>
                    <div class="about-text">
                        <h2>so, <span>who</span> i'm <span>i</span>?</h2>
                        <p>My story started when I was 12 years old. At that time, I started practicing sports, so the first thing I played was athletics (shot put), in which <span>I won many championships at the level of Alexandria,</span></p>
                        <p> After a while, I started to get positions in the Republic championships as well, so I took the third Republic three times</p>
                        <p>After that, I played Roman wrestling, and thank God <span>I always took the first place in the Alexandria championship</span> in addition I won the third place in the junior republic championship once , and the fifth place in the youth republic twice</p>
                    </div>
                </div>
            </div>
        </section>
        <section class=" about about2">
            <div class="container">
                <div class="about-content">
                    <div class="about-photo">
                        <img src="images/banner.jpg" alt="about photo">
                    </div>
                    <div class="about-text">
                        <p>And certainly in the middle, I used to go to the gym, so I used to <span>focus on muscle bulkiness and strength,</span> and I used to <span>focus on weightlifting "clean and snatch"</span> and this is because they used to help me in the sports I play and improve my strength and muscular coordination. And I practiced powerlifting but not for so much, to increase my physical strength</p>
                        <p>Despite all this long history as an athlete, I never thought about earning money or working in the sports field because my parents always perceived sport as a hobby that couldn’t turn into a career. Then high school came, and <br><span>I got 94%</span> <br>and unfortunately, I joined the faculty of agriculture. I knew from the first year that it didn’t suit me.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class=" about about3">
            <div class="container">
                <div class="about-content">
                    <div class="about-photo">
                        <img src="images/in the stadum.jpg" alt="about photo">
                    </div>
                    <div class="about-text">
                        <p>I started to learn more about training and nutrition sciences so that I could train myself, and <span>I was surprised,</span> It was the first time for me to feel happy while I’m studying; I always had the potential to dig deeper and never felt like I was done with learning!</p>
                        <p>Just here, I decided to take this pleasure of learning to a bigger destination. I decided to learn in order to be a personal trainer.</p>
                        <p><span>I became a certified personal trainer</span></p>
                        <p> started my Instagram page based on 3 years of extensive learning, and I was really concerned with delivering real value to my audience. As time passed, I coached many people and helped them to achieve their goals.</p>
                    </div>
                </div>
            </div>
        </section>
    `
}
// End render about