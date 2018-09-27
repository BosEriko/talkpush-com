import React from 'react'
import styles from './style/modal.module.scss'

class Modal extends React.Component {
  render() {
    const { closeModal, maxWidth, middleIcon, title, content, image, imageSet, changeImage, profilePicture, name, position, video } = this.props;
    return (
      <div className={styles.block}>
        <div className={styles.blockFilter} onClick={closeModal}></div>
        <div className={styles.blockHolder}>
          <div style={{ maxWidth: maxWidth + 'px' }} className={styles.blockHolderBox}>
            <a href="#" className={styles.blockHolderBoxClose} onClick={closeModal}>
              <i className="fa fa-times fa-fw" aria-hidden="true"></i>
            </a>
            {middleIcon && <div className={styles.blockHolderBoxIcon}><img src={middleIcon} /></div>}
            {profilePicture && <div className={styles.blockHolderBoxProfilePicture}><img src={profilePicture} /></div>}
            {title && <h3 className="global-hero-glow-white m-0 p-0">{title}</h3>}
            {name && <h4 className={"global-hero-glow-green " + styles.blockHolderBoxProfileName}>{name}</h4>}
            {position && <h4 className={"global-hero-glow-white " + styles.blockHolderBoxProfilePosition}>{position}</h4>}
            {content && <div className={styles.blockHolderBoxContent}>{content}</div>}
            {image && <div className={styles.blockHolderBoxImage}><img src={image} alt={title ? title : "No Title"} /></div>}
            {video && <div className={styles.blockHolderBoxVideo}><iframe width="560" height="315" src={"https://www.youtube.com/embed/" + video} frameBorder="0" allowFullScreen></iframe></div>}
            {imageSet && <div className={styles.blockHolderBoxImageSet}>
              {imageSet ? imageSet.map((pic, index) => <a href="#" onClick={() => changeImage(imageSet[index])} className={styles.blockHolderBoxImageSetItem} key={index}><img src={pic} alt={"image-" + index} /></a>) : null}
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal