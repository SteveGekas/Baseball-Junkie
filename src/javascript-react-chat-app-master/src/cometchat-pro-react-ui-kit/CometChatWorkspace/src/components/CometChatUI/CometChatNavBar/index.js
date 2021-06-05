import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { CometChatUserList } from "../../Users";
import { CometChatGroupList } from "../../Groups";
import { CometChatConversationList } from "../../Chats";
import { CometChatUserProfile } from "../../UserProfile";

import * as enums from "../../../util/enums.js";
import {CometChatContext} from "../../../util/CometChatContext";

import Translator from "../../../resources/localization/translator";
import { theme } from "../../../resources/theme";
import tabs from "../../../resources/tabs.json";

import {
  footerStyle,
  navbarStyle,
  itemStyle,
  itemLinkStyle
} from "./style";

import chatGreyIcon from "./resources/chats-grey.png";
import chatBlueIcon from "./resources/chats-blue.png";
import contactGreyIcon from "./resources/contacts-grey.png";
import contactBlueIcon from "./resources/contacts-blue.png";
import groupGreyIcon from "./resources/groups-grey.png";
import groupBlueIcon from "./resources/groups-blue.png";
import moreGreyIcon from "./resources/userinfo-grey.png";
import moreBlueIcon from "./resources/userinfo-blue.png";

export class CometChatNavBar extends React.Component {
	static contextType = CometChatContext;

	tabListKeys = []; 
	constructor(props) {
		super(props);

		this.state = {
			activeTab: null,
			tabList: [],
		};
	}

	componentDidMount() {

		let tabList = this.context.UIKitSettings.tabs;

		tabList.forEach(tabName => {
			for (const t in tabs) {
				if (tabName === tabs[t]) {
					this.tabListKeys.push(t);
				}
			}
		});

    	this.getFilteredTabs().then(filteredTabs => {
			this.setState({tabList: filteredTabs, activeTab: filteredTabs[0]});
		});

	}


	getFilteredTabs = () => {

		return new Promise(resolve => {

			const filteredTabs = [];
			const promises = [this.enableChats(), this.enableUsers(), this.enableGroups(), this.enableSettings()];
			Promise.allSettled(promises).then(results => {
				
				this.tabListKeys.forEach(eachTabKey => {
					results.forEach(result => {
						const tabKey = result.value[0];
						const tabEnabled = result.value[1];

						if (eachTabKey === tabKey && tabEnabled === true) {
						filteredTabs.push(eachTabKey);
						}
					});
				});
				resolve(filteredTabs);
			});
		});
	}

	enableChats = () => {
		return new Promise(resolve => {
			this.context.FeatureRestriction.isRecentChatListEnabled()
				.then(response => resolve(["SIDEBAR_CHATS", response]))
				.catch(error => resolve(["SIDEBAR_CHATS", false]));
		});
	};

	enableUsers = () => {
		return new Promise(resolve => {
			this.context.FeatureRestriction.isUserListEnabled()
				.then(response => resolve(["SIDEBAR_USERS", response]))
				.catch(error => resolve(["SIDEBAR_USERS", false]));
		});
	};

	enableGroups = () => {
		return new Promise(resolve => {
			this.context.FeatureRestriction.isGroupListEnabled()
				.then(response => resolve(["SIDEBAR_GROUPS", response]))
				.catch(error => resolve(["SIDEBAR_GROUPS", false]));
		});
	};

	enableSettings = () => {
		return new Promise(resolve => {
			this.context.FeatureRestriction.isUserSettingsEnabled()
				.then(response => resolve(["SIDEBAR_MOREINFO", response]))
				.catch(error => resolve(["SIDEBAR_MOREINFO", false]));
		});
	};

	tabChanged = tab => {

		this.context.setLastMessage("");
		this.setState({activeTab: tab});
	};

	getActiveTab = () => {
		switch (this.state.activeTab) {
			case "SIDEBAR_USERS":
				return <CometChatUserList theme={this.props.theme} lang={this.props.lang} _parent="unified" actionGenerated={this.props.actionGenerated} onItemClick={(item, type) => this.props.actionGenerated(enums.ACTIONS["ITEM_CLICKED"], type, item)} />;
			case "SIDEBAR_CALLS":
				return null;
			case "SIDEBAR_CHATS":
				return <CometChatConversationList theme={this.props.theme} lang={this.props.lang} _parent="unified" actionGenerated={this.props.actionGenerated} onItemClick={(item, type) => this.props.actionGenerated(enums.ACTIONS["ITEM_CLICKED"], type, item)} />;
			case "SIDEBAR_GROUPS":
				return <CometChatGroupList theme={this.props.theme} lang={this.props.lang} _parent="unified" actionGenerated={this.props.actionGenerated} onItemClick={(item, type) => this.props.actionGenerated(enums.ACTIONS["ITEM_CLICKED"], type, item)} />;
			case "SIDEBAR_MOREINFO":
				return <CometChatUserProfile theme={this.props.theme} lang={this.props.lang} onItemClick={(item, type) => this.props.actionGenerated(enums.ACTIONS["ITEM_CLICKED"], type, item)} />;
			default:
				return null;
		}
	};

	getTabList = () => {

		const chatsTabActive = this.state.activeTab === "SIDEBAR_CHATS" ? true : false;
		const userTabActive = this.state.activeTab === "SIDEBAR_USERS" ? true : false;
		const groupsTabActive = this.state.activeTab === "SIDEBAR_GROUPS" ? true : false;
		const moreTabActive = this.state.activeTab === "SIDEBAR_MOREINFO" ? true : false;

		const tabList = [...this.state.tabList];

		return tabList.map(tab => {
			switch (tab) {
				case "SIDEBAR_CHATS":
					return (
						<div key={tab} css={itemStyle(this.props)} className="navbar__item" onClick={() => this.tabChanged("SIDEBAR_CHATS")}>
							<div css={itemLinkStyle(chatGreyIcon, chatBlueIcon, chatsTabActive, "SIDEBAR_CHATS")} className="item__link item__link__chats" title={Translator.translate("CHATS", this.props.lang)}></div>
							<div>{Translator.translate("CHATS", this.props.lang)}</div>
						</div>
					);
				case "SIDEBAR_USERS":
					return (
						<div key={tab} css={itemStyle(this.props)} className="navbar__item" onClick={() => this.tabChanged("SIDEBAR_USERS")}>
							<div css={itemLinkStyle(contactGreyIcon, contactBlueIcon, userTabActive, "SIDEBAR_USERS")} className="item__link item__link__contacts" title={Translator.translate("USERS", this.props.lang)}></div>
							<div>{Translator.translate("USERS", this.props.lang)}</div>
						</div>
					);
				case "SIDEBAR_GROUPS":
					return (
						<div key={tab} css={itemStyle(this.props)} className="navbar__item" onClick={() => this.tabChanged("SIDEBAR_GROUPS")}>
							<div css={itemLinkStyle(groupGreyIcon, groupBlueIcon, groupsTabActive, "SIDEBAR_GROUPS")} className="item__link item__link__groups" title={Translator.translate("GROUPS", this.props.lang)}></div>
							<div>{Translator.translate("GROUPS", this.props.lang)}</div>
						</div>
					);
				case "SIDEBAR_MOREINFO":
					return (
						<div key={tab} css={itemStyle(this.props)} className="navbar__item" onClick={() => this.tabChanged("SIDEBAR_MOREINFO")}>
							<div css={itemLinkStyle(moreGreyIcon, moreBlueIcon, moreTabActive, "SIDEBAR_MOREINFO")} className="item__link item__link__info" title={Translator.translate("MORE", this.props.lang)}></div>
							<div>{Translator.translate("SETTINGS", this.props.lang)}</div>
						</div>
					);
				default:
					return null;
			}
		});
	};

	render() {
		return (
			<React.Fragment>
				{this.getActiveTab()}
				<div css={footerStyle()} className="sidebar__footer">
					<div css={navbarStyle()} className="footer__navbar">
						{this.getTabList()}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// Specifies the default values for props:
CometChatNavBar.defaultProps = {
	lang: Translator.getDefaultLanguage(),
	theme: theme
};

CometChatNavBar.propTypes = {
	lang: PropTypes.string,
	theme: PropTypes.object
}