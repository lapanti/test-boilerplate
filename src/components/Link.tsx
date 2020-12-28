import React from 'react'
import type { LinkProps as ReactRouterLinkProps, NavLinkProps } from 'react-router-dom'
import { Link as ReactRouterLink, NavLink } from 'react-router-dom'
import styled from 'styled-components'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> | ReactRouterLinkProps | NavLinkProps

const isAnchorProps = (props: LinkProps): props is React.AnchorHTMLAttributes<HTMLAnchorElement> => 'href' in props
const isReactRouterLinkProps = (props: LinkProps): props is ReactRouterLinkProps => 'to' in props
const isNavLinkProps = (props: LinkProps): props is NavLinkProps => 'activeClassName' in props

const LinkComponent: React.FunctionComponent<LinkProps> = (props) =>
    isNavLinkProps(props) ? (
        <NavLink {...props} />
    ) : isReactRouterLinkProps(props) ? (
        <ReactRouterLink {...props} />
    ) : isAnchorProps(props) ? (
        <a {...props} target="_blank" />
    ) : null

const Link = styled(LinkComponent)<LinkProps>`
    color: var(--link-color);

    :hover {
        color: var(--link-hover-color);
    }
`

Link.displayName = 'Link'

export default Link
