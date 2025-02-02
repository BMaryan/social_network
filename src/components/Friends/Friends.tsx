import React from "react";
import { AccountType, FirebaseType, HistoryType } from "../../types/types";
import { followersConstant, followingConstant, friendsConstant, recommendationConstant } from "../../core/constants/constants";
import Recommendation from "./Recommendation/Recommendation";
import DefaultFriends from "./DefaultFriends/DefaultFriends";
import GoBackHead from "../common/GoBackHead/GoBackHead";
import Following from "./Following/Following";
import Followers from "./Followers/Followers";
import styles from "./Friends.module.scss";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Media from "react-media";

interface FriendsPropsType {
  accounts: Array<FirebaseType<AccountType>>;
  account: AccountType | null;
  history: HistoryType;
}

const Friends = (props: FriendsPropsType) => {
  const title = {
    following: followingConstant.title,
    followers: followersConstant.title,
    recommendation: recommendationConstant.title,
  };

  const path = {
    following: followingConstant.path,
    followers: followersConstant.path,
    recommendation: recommendationConstant.path,
  };

  const checkFollowing = props.history.location.pathname.includes(path.following);
  const checkFollowers = props.history.location.pathname.includes(path.followers);
  const checkRecommendation = props.history.location.pathname.includes(path.recommendation);

  return (
    <div className={styles.friends}>
      <div className={styles.wrapper_friends}>
        {/* head for go back */}
        {checkFollowing || checkFollowers || checkRecommendation ? <Media query={{ maxWidth: 399 }}>{(matches) => (matches ? <GoBackHead title={checkFollowing ? title.following : checkFollowers ? title.followers : checkRecommendation ? title.recommendation : ""} history={props.history} /> : <></>)}</Media> : undefined}

        {/* menu */}
        <div className={!(checkFollowing || checkFollowers || checkRecommendation) ? styles.friends_menu : styles.friends_menu__none}>
          <ul className={styles.menu}>
            <li className={styles.friends_item}>
              <NavLink exact to={`${friendsConstant.path}${path.following}`} className={styles.item} activeClassName={styles.item_active}>
                Following
              </NavLink>
            </li>
            <li className={styles.friends_item}>
              <NavLink exact to={`${friendsConstant.path}${path.followers}`} className={styles.item} activeClassName={styles.item_active}>
                Followers
              </NavLink>
            </li>
            <li className={styles.friends_item}>
              <NavLink exact to={`${friendsConstant.path}${path.recommendation}`} className={styles.item} activeClassName={styles.item_active}>
                Recommendation
              </NavLink>
            </li>
          </ul>
        </div>

        {/* content */}
        <div className={styles.friends_content}>
          <Route exact path={`${friendsConstant.path}${path.following}`} render={() => <Following accounts={props.accounts} account={props.account} />} />
          <Route exact path={`${friendsConstant.path}${path.followers}`} render={() => <Followers accounts={props.accounts} account={props.account} />} />
          <Route exact path={`${friendsConstant.path}${path.recommendation}`} render={() => <Recommendation accounts={props.accounts} account={props.account} />} />
          <Route exact path={`${friendsConstant.path}`} render={() => <DefaultFriends />} />
        </div>
      </div>
    </div>
  );
};

export default Friends;
