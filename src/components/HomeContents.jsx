import React from 'react';
import '../css/Home.css';
import bgvideo from '../assets/home/landingvideo.mp4';

const Home = () => {
	return (
		<div>
			<section className="my-video-container" id="section1">
    		<video className="my-fullscreen-video my-background" src={bgvideo} muted loop autoPlay></video>
				<h1 className="text-white my-tagline">Welcome to Cincinnati
			</h1>
  		</section>
		<section>
		<h1>Cincinnati History</h1>
		<p>Cincinnati was founded in 1788 by Colonel Robert Patterson and Judge John Cleves Symmes. They named the city "Cincinnati" after the Society of the Cincinnati, of which they were members.</p>

<p>Cincinnati was the first major city founded after the American Revolution, and because of this, it is sometimes called "The Birthplace of the West."</p>

<p>Cincinnati grew rapidly in its early years, and by the 1830s it was the sixth-largest city in the United States. It was a major stop on the Underground Railroad, and its population was very diverse for its time.</p>

<p>Cincinnati was a major manufacturing city during the Industrial Revolution, and it remained an important manufacturing center even after the decline of industry in the mid-20th century. Today, the city is known for its arts and culture scene, as well as its food (Cincinnati chili is a popular dish).</p>
<h1>Things to do</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptatum!</p>

<h1>Our Food</h1>

<p>Cincinnati is known for its chili. The dish is so popular that there is even an annual Cincinnati Chili Cook-Off. Other local favorites include goetta (a sausage made with oats and meat), Montgomery Inn ribs, and Graeter's ice cream.</p>

<h2>Chili</h2>

<p>Cincinnati chili is a unique type of chili that is served over spaghetti and often topped with shredded cheese and onions. It is typically made with a combination of beef, tomatoes, and chocolate, and can be quite spicy.</p>

<h2>Goetta</h2>

<p>Goetta is a sausage made with oats and meat, typically pork or beef. It is popular in the Cincinnati area and is often served for breakfast with eggs.</p>

<h2>Montgomery Inn Ribs</h2>

<p>Montgomery Inn is a local restaurant chain that is known for its ribs. The ribs are slow-cooked and brushed with a sweet and tangy BBQ sauce.</p>

<h2>Graeter's Ice Cream</h2>

<p>Graeter's is a local ice cream chain that is known for its delicious and unique flavors. The ice cream is made with fresh ingredients and hand-packed into pint-sized containers.</p>


<h1>Our Culture</h1>
    <p>
      Cincinnati is known for its strong German heritage. The city is home to the world's second-largest Oktoberfest celebration and hosts a number of other German-themed events throughout the year. The city is also home to a number of museums and cultural institutions, including the Cincinnati Art Museum, the Cincinnati Museum Center, and the National Underground Railroad Freedom Center.
    </p>

	<h1>Plan Your Trip Now!</h1>
  <p>Come and explore Cincinnati with us! We'll be visiting some of the city's most popular attractions, including the Cincinnati Zoo, the National Underground Railroad Freedom Center, and the Cincinnati Art Museum. We'll also have plenty of time to explore the city on our own and enjoy some of the great food Cincinnati has to offer. This trip is sure to be a lot of fun, so sign up today!</p>
		</section>
			<section className='my-center' id='section2'>
				<h4 className='my-section2-tagline'>Come explore Cincinnati and discover all the hidden gems this city has to offer!</h4>
			</section>
		</div>
	)
}

export default Home