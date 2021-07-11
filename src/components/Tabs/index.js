import React from 'react'

import Tab from './components/Tab'

import styles from './index.module.css'


class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: props.defaultActive
    }
  }

  onClickTabItem (tabName) {
    this.setState({ activeTab: tabName })
  }

  render() {
    const {
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className={styles.tab}>
        <ol className={styles.tabList}>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                width={`${100 / children.length}%`}
                onClick={e => this.onClickTabItem(e)}
              />
            );
          })}
        </ol>
        <div className={styles.tabContent}>
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs