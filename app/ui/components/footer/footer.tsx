import styles from "@/app/ui/styles/footer.module.css"
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="bg-deep-purple text-white">
                <section className="flex-none md:flex-none lg:flex gap-5 pt-24 pb-24 px-4 md:px-32">
                    <section className="flex-1 mb-9 lg:mb-0">
                        <div className="mb-5">
                            <Image src={"/footer-logo.png"} alt="AMN Logo" height={90} width={150} priority={true} quality={100}/>
                        </div>
                        <div>
                            <ul className="list-none">
                                <li className="mb-2"><small>Phone: (267) 994-7800</small></li>
                                <li className="mb-2"><small>Email</small></li>
                                <li className="mb-2"><small>coach@aligningmindsnetwork.com</small></li>
                                <li className="mb-2"><small>support@aligningmindsnetwork.com</small></li>
                                <li className="mb-2"><small>info@aligningmindsnetwork.com</small></li>
                            </ul>
                        </div>
                    </section>
                    <section className="flex-1 mb-9 lg:mb-0">
                        <div className="">
                            <ul className="list-none">
                                <h3 className="mb-5 font-medium">Other Pages</h3>
                                <div className="flex gap-10">
                                    <div>
                                        <li className="mb-3"><Link href="/"><small>Home</small></Link></li>
                                        <li className="mb-3"><Link href="about"><small>About Us</small></Link></li>
                                        <li className="mb-3"><Link href="services"><small>Services</small></Link></li>
                                        <li className="mb-3"><Link href="join-team"><small>Testimonials</small></Link></li>
                                        <li className="mb-3"><Link href="employee-portal"><small>Contact Us</small></Link></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section className="flex-1 mb-9 lg:mb-0">
                        <div className="">
                            <ul className="list-none">
                                <h3 className="mb-5 font-medium">Quick Links</h3>
                                <div className="flex gap-10">
                                    <div>
                                        <li className="mb-3"><Link href="/"><small>Privacy Policy</small></Link></li>
                                        <li className="mb-3"><Link href="about"><small>Terms of Use</small></Link></li>
                                        <li className="mb-3"><Link href="services"><small>Disclaimer</small></Link></li>
                                        <li className="mb-3"><Link href="join-team"><small>Credits</small></Link></li>
                                        <li className="mb-3"><Link href="employee-portal"><small>FAQ</small></Link></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </section>
                    <section className="w-72">
                        <div className="flex flex-col justify-between">
                            <div className="mb-5 lg:mb-0">
                                <h3 className="mb-2 font-medium">Newsletter</h3>
                                <div className="flex gap-10">
                                    <form className={`${styles.newsletter_input} flex justify-between py-2 pl-3 md:pl-5 pr-1 w-full rounded-lg bg-white`}>
                                        <input type="email" className="rounded-full outline-none text-black text-xs w-4/6" placeholder="Your email address"/>
                                        <button type="submit" className="px-4 py-2 md:px-6 md:py-3 rounded-lg bg-faq-ash text-white text-xs">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="lg:mt-10">
                                <div>
                                    <p className="lg:mb-0">Get the latest news & updates</p>
                                    <div className={`${""} mt-3 w-max flex`}>
                                        <a href="" className="mr-4">
                                            <Image 
                                                src="/footer/facebook.png"
                                                alt="facebook logo"
                                                width="44"
                                                height="24"
                                                priority={true}
                                            />
                                        </a>
                                        <a href="" className="mr-4">
                                            <Image 
                                                src="/footer/instagram.png"
                                                alt="instagram logo"
                                                width="44"
                                                height="24"
                                                priority={true}
                                            />
                                        </a>
                                        <a href="" className="mr-4">
                                            <Image 
                                                src="/footer/linkedin.png"
                                                alt="linkedin logo"
                                                width="44"
                                                height="24"
                                                priority={true}
                                            />
                                        </a>
                                        <a href="" className="mr-4">
                                            <Image 
                                                src="/footer/x.png"
                                                alt="x formerly twitter logo"
                                                width="44"
                                                height="24"
                                                priority={true}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="flex border-t-2 border-white flex-none md:flex-none lg:flex gap-5 px-4 md:px-32">
                    <div className="py-8">
                        <small>Copyright © 2024 All rights reserved.</small>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </footer>

        </>
    )
}