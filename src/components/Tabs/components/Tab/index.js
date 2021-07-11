import React from 'react'

import styles from './index.module.css'

class Tab extends React.Component {
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        width
      },
    } = this;

    let className = styles.tabListItem;

    if (activeTab === label) {
      className = styles.tabListItemActive;
    }

    return (
      <li
        className={className}
        style={{ width }}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;