<template>
  <div>
    
<!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav" href="#"></a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#about">Bio</a>
                    </li>
                    <li>
                        <a href="#WorkExperience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>


    <!-- Header -->
    <a name="Intro"></a>
    <div class="intro-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Justin Hynes-Bruell</h1>
                        <h3>B.S Computer Engineering, Northeastern University</h3>
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="https://github.com/jhynes94" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/justin-hynes-bruell-3ba07360/" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.intro-header -->

    <!-- Page Content -->

	<a  name="about"></a>
    <div class="content-section-a">

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <div class="clearfix"></div>
                    <h2 class="section-heading">About</h2>
                    <p class="lead" style="text-align: left;">Born in Boston, I was fortunate enough to be surrounded by the forfront of science and technology. While naviageing Boston's public schools, I knew my future would lie in Engineering</p>
                    <p class="lead" style="text-align: left;">After taking classes at MIT while in high school, I decided that Northeastern University was the correct collge for me.</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/IR_Project.jpeg" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

	<a  name="WorkExperience"></a>
    <div class="content-section-b">
        <h1 style="text-align: center" class="section-heading">Work Experience</h1>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Digital Lumens</h2>
                    <p class="lead" style="text-align: left">At Digital Lumens, my primary task was designing, manufacturing, and testing PCB's for their next generation lighting system. I was often challenged to design cost-effective boards that were innovative in manufacturing techniques, as well as push our product though electromagnetic compatibility. My major project was to develop a USB interface control board that could withstand 5kV standoff voltage, and supply laptop power when necessary. This was controlled by at ATTINY “state machine”, which I also wrote the firmware for. The tools I used to accomplish my projects included Altium, Python, and Solidworks.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6 row-lg-offset-2">
                    <img style="padding-top: 90px" class="img-responsive" src="../assets/img/Engineering/DL-PCB.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                    <div class="clearfix"></div>
                    <h2 class="section-heading">Grove</h2>
                    <p class="lead" style="text-align: left">At Grove Labs, my primary task was drafting, constructing, and outlining quality-assurance tests for PCBs for the Grove Ecosystem. Mechanical specifications were a constant struggle, but I overcame this by negotiating size and number of board layers with my boss, as well as drawing from previous experience to find innovative ways to minimize parts and design a more sleek and efficient product. This involved using various materials in the construction of mechanical prototypes. My primary project in this co-op was designing the first iteration of the Power Control Board PCB, which is now sold in retail. The tools that I used to accomplish my projects included DipTrace, OrCAD, and OnShape.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img style="padding-top: 130px" class="img-responsive" src="../assets/img/Engineering/GrovePCB.jpg" alt="">
                </div>
            </div>
        </div>
        <!-- /.container -->
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                            <hr class="section-heading-spacer">
                            <div class="clearfix"></div>
                            <h2 class="section-heading">Hasbro</h2>
                            <p class="lead" style="text-align: left">Before Grove, I worked at Hasbro serving on their Advanced Technology and Innovation (ATI) team. On this team, I built hardware prototypes and embedded software programs for products that are now currently on the market, including but not limited to: Star Wars, Nerf, and Sesame Street. I am proficient in 5 internal embedded programming languages as well as Arduino. I have also created PCBs for Hasbro using Eagle, Multisim, and ExpressPCB.</p>
                        </div>
                        <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                            <img style="padding-top: 70px" class="img-responsive" src="../assets/img/Engineering/ezgif.com-video-to-gif.gif" alt="">
                        </div>
                    </div>
                </div>
                <!-- /.container -->

    </div>



    <!-- /.content-section-b -->
	<a  name="projects"></a>
    <div class="content-section-b">
        <h1 style="text-align: center" class="section-heading">Projects</h1>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Capstone</h2>
                    <p class="lead">Lead development for hardware and firmware. Competing aginst strong competition, pushed team of six engineers 1st place.</p>
                    <a href="./capstone/index.html" class="btn btn-default btn-lg">
                        <i class="fa fa-link fa-fw"></i>
                        <span class="network-name">View Here</span>
                    </a>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/capstoneImage.png" alt="">
                </div>
            </div>
        </div>

                
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">IR remote</h2>
                    <p class="lead">My teammate, John Smith, and I won 1st place in IR transmitter/reciever competition at Northeastern University. </p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/IR_Project.jpeg" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                    <h2 class="section-heading">Nomsly</h2>
                    <p class="lead">Created an inventory management system that is customer facing for food products. Has metrics regarding usage and user preferences as well as out of stock warnings.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/Nomsly.png" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Hike 4000</h2>
                    <p class="lead">Here, users can create an account using facebook, G+, or email, and share rides with other hikers to the 48 4,000-foot mountains of New Hampshire. They can also find resources and descriptions of the mountains, as well as a weather tracker to see what date would work best for their hike.  I am currently on establishing a public forum where people can ask other hikers their opinions on anything from the mountains themselves to preference of hiking gear.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/Hike4000.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Digital Lumens</h2>
                    <p class="lead"><p class="lead">For Digital Lumens, I created a web app using Heroku that allows us to manage and keep an inventory of the company’s electronic components. This web app ran a background python script to scrape DigiKey and Mouser for data regarding the name of the part, the number of parts in stock, the cost of each part, and miscellaneous other data for the components.</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/DL.png" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Live temp of Home</h2>
                    <p class="lead">Nomsly</p>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/Hike4000.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <h2 class="section-heading">Product on Tindie</h2>
                    <p class="lead">Created a water level sensor product sold on Tindie</p>
                    <a href="https://www.tindie.com/products/jbruell94/i2c-water-level-sensor/" class="btn btn-default btn-lg">
                        <i class="fa fa-link fa-fw"></i>
                        <span class="network-name">View Here</span>
                    </a>
                </div>
                <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img class="img-responsive" src="../assets/img/Engineering/tindie.jpeg" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr class="section-heading-spacer">
                </div>
            </div>
        </div>
        
    </div>
    <!-- /.content-section-b -->

    <div class="content-section-a">

        <div class="container">

            <div class="row">
                <div class="col-lg-5 col-sm-6">
                    <h2 class="section-heading">Future goals</h2>
                    <p class="lead">VR Related projects</p>
                </div>
                <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img class="img-responsive" src="../assets/img/Mountaineering/Cliff.jpg" alt="">
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

	<a  name="contact"></a>
    <div class="banner">

        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <h2>Connect with me:</h2>
                </div>
                <div class="col-lg-6">
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="https://twitter.com/Jbruell" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/jhynes94" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/justin-hynes-bruell-3ba07360/" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.banner -->

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Copyright &copy; Justin Hynes-Bruell 2018. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "Engineering",
  data() {
    return {
      producion: "No data",
    };
  },
  methods: {
  },
  created: function() {
    this.producion = process.env.NODE_ENV;
    if (this.producion === "development") {
      this.apiURL = "http://localhost:3000";
    }

  }
};
</script>

<style scoped>

@import '../assets/css/landing-page.css';
@import '../assets/css/bootstrap.min.css';
@import 'https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic';
@import '../assets/font-awesome/css/font-awesome.min.css';

</style>

