import { css } from '@linaria/core'
import React from 'react'
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom'

const styles = css`
    color: var(--link-color);

    :hover {
        color: var(--link-hover-color);
    }
`

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> | ReactRouterLinkProps

const isAnchorProps = (props: LinkProps): props is React.AnchorHTMLAttributes<HTMLAnchorElement> => 'href' in props
const isReactRouterLinkProps = (props: LinkProps): props is ReactRouterLinkProps => 'to' in props

const Link: React.FunctionComponent<LinkProps> = (props) =>
    isAnchorProps(props) ? (
        <a {...props} className={styles} target="_blank" />
    ) : isReactRouterLinkProps(props) ? (
        <ReactRouterLink {...props} className={styles} />
    ) : null

export default Link
