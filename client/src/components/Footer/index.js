import './index.css'
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer () {
    return (
        <div>
        <footer class="footer-distributed">

			<div class="footer-left">

				<h3>One Stop Bop Shop</h3>

				<p class="footer-links">
					<a href="/" class="link-1">Home </a>
					
					<a href="/vinyls">Products </a>

					<a href="/curators">About </a>
					
					<a href="mailto:support@company.com">Contact</a>

				</p>

				<p class="footer-company-name">One Stop Bop Shop © 2015</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>123 Graduating Drive</span> Philadelphia, PA</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>123.456.7890</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@onestopbopshop.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
                    A group of individuals who wanted to share their love for music with the world!                       
				</p>

				<div class="footer-icons">

                    <SocialIcon url="https://facebook.com/" bgColor='#fff'/>
                    <SocialIcon url="https://twitter.com/" bgColor='#fff'/>
                    <SocialIcon url="https://github.com/TabithaLy/one-stop-bop-shop" bgColor='#fff'/>

				</div>

			</div>

		</footer>
        </div>
    );
};

export default Footer;