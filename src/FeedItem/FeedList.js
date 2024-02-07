import React, { Component } from 'react';
import { message, List, Avatar, Icon, Card, Spin } from 'antd';
import renderHTML from 'react-render-html';

const RSSParser = require('rss-parser');
const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

class FeedList extends Component {
  state = {
    feed: [],
    loading: true
  };
  componentDidMount(){
    this.fetchFeed(this.props.url);
  }
  componentWillReceiveProps(nextProps){
    console.log("New Props", nextProps);
    this.fetchFeed(nextProps.url);
  }
  fetchFeed(url){
    let self = this;
    self.setState({ feed: [], loading: true });
    const CORS_PROXY = "https://getrssfeed-mm5zus754q-uc.a.run.app?url="
    let parser = new RSSParser();
    parser.parseURL(url, function(err, rssfeed) {
     if (rssfeed !== undefined) {
       console.log("Feed", rssfeed);
        self.setState({ feed: rssfeed.items, loading: false });
     }
})
  }
  render() {
      const { feed, loading } = this.state;
      const view = loading ? <Spin tip="Loading..."> </Spin> : <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={feed}
      renderItem={item => (
          <List.Item>
            <Card 
            extra={<a target="_blank" href={item.link}>Full Story</a>}
            title={item.title}>{renderHTML(item.content)}</Card>
          </List.Item>
        )}
    />;
    return (
      view
    );
}
}
export default FeedList;