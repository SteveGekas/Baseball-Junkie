import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from "@emotion/core";
import PropTypes from "prop-types";

import {CometChatContext} from "../../../util/CometChatContext";
import * as enums from "../../../util/enums.js";

import {theme} from "../../../resources/theme";
import Translator from "../../../resources/localization/translator";

import {replyCountStyle} from "./style";

const CometChatThreadedMessageReplyCount = props => {
	const context = React.useContext(CometChatContext);
	const [reply, setReply] = React.useState(false);

	const toggleReply = () => {
		context.FeatureRestriction.isThreadedMessagesEnabled()
			.then(response => {
				if (response !== reply) {
					setReply(response);
				}
			})
			.catch(error => {
				if (reply !== false) {
					setReply(false);
				}
			});
	};

	React.useEffect(toggleReply);

	const replyCount = props.message.replyCount;
	const replyText = replyCount === 1 ? `${replyCount} ${Translator.translate("REPLY", props.lang)}` : `${replyCount} ${Translator.translate("REPLIES", props.lang)}`;

	let replies = (
		<span css={replyCountStyle(props)} className="replycount" onClick={() => props.actionGenerated(enums.ACTIONS["VIEW_THREADED_MESSAGE"], props.message)}>
			{replyText}
		</span>
	);

	if (props.message.hasOwnProperty("replyCount") === false) {
		replies = null;
	}

	//if threadedchats feature is disabled
	if (reply === false) {
		replies = null;
	}

	return replies;
};

// Specifies the default values for props:
CometChatThreadedMessageReplyCount.defaultProps = {
	lang: Translator.getDefaultLanguage(),
	theme: theme,
	message: {},
};

CometChatThreadedMessageReplyCount.propTypes = {
	lang: PropTypes.string,
	theme: PropTypes.object,
	message: PropTypes.object,
};

export {CometChatThreadedMessageReplyCount};
