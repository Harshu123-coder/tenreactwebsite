import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="What is Entrepreneurship Network(TEN)?" key="1">
            <p>The Entrepreneurship Network(TEN) is a community based Edu-tech group whose objective is to provide quality learning and expertise.Our current customer segment , at present,stands at 500+ colleges and 15000+ students ,with new institutions coming in all the time.</p>
          </Panel>
          <Panel header="Why do I join TEN?" key="2">
            <p>TEN would enable you to accelerate your aspirations to providing an opportunity to master the most desired skill-sets in today's market.</p>
          </Panel>
          <Panel header="What is Entrepreneurship Network(TEN)?" key="3">
            <p>The Entrepreneurship Network(TEN) is a community based Edu-tech group whose objective is to provide quality learning and expertise.Our current customer segment , at present,stands at 500+ colleges and 15000+ students ,with new institutions coming in all the time.</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>Erant vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p> vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>Erant vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur velit necessitatibus praesentium aliquid eos in neque recusandae, incidunt esse dolore voluptatum nesciunt quod soluta consequuntur voluptatibus ab excepturi nobis! Porro!</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>
  );
}

export default AppFaq;