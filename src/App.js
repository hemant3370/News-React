import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import FeedList from './FeedItem/FeedList';
import HDirectory from './Hospitals/HDirectory';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class App extends Component {
  state = {
    feed: {
      "Comics": {
        "Buttersafe": "http://feeds.feedburner.com/Buttersafe?format=xml",
        "Oglaf": "http://oglaf.com/feeds/rss/",
        "SMBC": "http://www.smbc-comics.com/rss.php",
        "What If": "https://what-if.xkcd.com/feed.atom",
        "XKCD": "https://xkcd.com/atom.xml"
      },
      "Entertainment": {
        "BBC": "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
        "CNN": "http://rss.cnn.com/rss/edition_entertainment.rss",
        "Hindu": "http://www.thehindu.com/entertainment/?service=rss",
        "Quora": "https://www.quora.com/topic/Entertainment/rss",
        "Reuters": "http://feeds.reuters.com/reuters/entertainment",
        "W Post": "http://feeds.washingtonpost.com/rss/entertainment"
      },
      "Health": {
        "BBC": "http://feeds.bbci.co.uk/news/health/rss.xml",
        "Health": "http://www.health.com/health/diet-fitness/feed",
        "Hindu": "http://www.thehindu.com/sci-tech/health/?service=rss",
        "Quora": "https://www.quora.com/topic/Health/rss",
        "Reuters": "http://feeds.reuters.com/reuters/healthNews",
        "W Post": "http://feeds.washingtonpost.com/rss/rss_to-your-health"
      },
      "Politics": {
        "BBC": "http://feeds.bbci.co.uk/news/politics/rss.xml",
        "NPR": "http://www.npr.org/rss/rss.php?id=1012",
        "RC Politics": "http://www.realclearpolitics.com/index.xml",
        "RCP": "http://feeds.feedburner.com/realclearpolitics/qlMj",
        "Reuters": "http://feeds.reuters.com/Reuters/PoliticsNews",
        "W Post": "http://feeds.washingtonpost.com/rss/politics"
      },
      "Science": {
        "BBC": "http://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
        "CNN": "http://rss.cnn.com/rss/edition_space.rss",
        "Hindu": "http://www.thehindu.com/sci-tech/?service=rss",
        "Quora": "https://www.quora.com/topic/Science/rss",
        "Reuters": "http://feeds.reuters.com/reuters/scienceNews",
        "W Post": "http://feeds.washingtonpost.com/rss/rss_speaking-of-science"
      },
      "Sports": {
        "BBC": "http://newsrss.bbc.co.uk/rss/sportonline_uk_edition/front_page/rss.xml",
        "CNN": "http://rss.cnn.com/rss/edition_sport.rss",
        "Hindu": "http://www.thehindu.com/sport/?service=rss",
        "Quora": "https://www.quora.com/topic/Sports/rss",
        "Reuters": "http://feeds.reuters.com/reuters/sportsNews",
        "W Post": "http://feeds.washingtonpost.com/rss/sports"
      },
      "World": {
        "BBC": "http://feeds.bbci.co.uk/news/world/rss.xml",
        "CNN": "http://rss.cnn.com/rss/edition_world.rss",
        "Hindu": "http://www.thehindu.com/news/international/world/?service=rss",
        "NPR": "http://www.npr.org/rss/rss.php",
        "Reuters": "http://feeds.reuters.com/reuters/INworldNews",
        "W Post": "http://feeds.washingtonpost.com/rss/world"
      }
    },
    url: 'http://feeds.feedburner.com/Buttersafe?format=xml'
  }
  
  render() {
    const categories = Object.keys(this.state.feed);
    const channels = Object.values(this.state.feed);
    console.log(this.state.url);
    return (
      <div className="App">
      <Layout>
    <Header className="header">
    <Menu
    theme="dark"
        mode="horizontal"
      >
       {categories.map((cat, index) => {
          return (
            <SubMenu key={cat+index} title={cat}>
          {Object.keys(channels[index]).map(channel => {
  return (
    <Menu.Item key={cat+channel} onClick={() => { this.setState({url: Object.values(channels)[index][channel] })}}>{channel}</Menu.Item>
  );
})}
        </SubMenu>
          );
        })}
      </Menu>
    </Header>
    <Layout>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
        <FeedList url={this.state.url}/>
        </Content>
      </Layout>
    </Layout>
  </Layout>
      </div>
    );
  }
}

export default App;
