import React from 'react';
import './Welcome.css';

function Welcome() {
  return (
    <div className="welcome">
	 <div className="welcome_body">
		<h2>Welcome to Slack-clone</h2>
		<img className="desktop_img" src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/slack-homepage-unfurl.jpg" alt="slack_image"/>
		<img className="mob_img" src="https://a.slack-edge.com/80588/marketing/img/homepage/teams-working-together-enterprise-slack.png" alt="slack_image"/>
		<p>Heyyyy User! Hope you're doing good.Click on the channel links below ---- #youtube,#tiktok or #general to see or send messages.</p>
	 </div>
    
	</div>
  );
}

export default Welcome;