import { render } from '@testing-library/react'
import React from 'react'

import Main from './Main'

jest.mock('../components/Link', () => ({ to, children }: { to: string; children: string }) => (
    <a href={to}>{children}</a>
))

describe('<Main />', () => {
    it('should match snapshot', () => {
        const { container } = render(<Main />)
        expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <p>
          Lorem ipsum dolor sit amet, 
          <a
            href="/"
          >
            consectetur
          </a>
           adipiscing elit. Donec eu libero in ligula luctus rutrum eget a dui. Nullam tempor massa eu neque viverra, quis congue orci gravida. Maecenas id ex augue. Morbi consequat suscipit lectus, vitae aliquet nunc scelerisque eget. Sed ultricies, felis sed vehicula interdum, metus ipsum porttitor purus, a hendrerit arcu lacus sit amet ante. Sed sed orci ligula. Maecenas nibh tellus, porta a nisi a, dapibus tincidunt risus. Pellentesque et ipsum a nunc gravida aliquam a id nisl.
        </p>
        <p>
          Etiam pulvinar, augue non semper commodo, urna neque egestas augue, eu ultricies magna sem et nisi. Pellentesque tempus ullamcorper elit vel blandit. Nunc vel bibendum sem. Quisque commodo diam vitae fringilla ornare. Nunc suscipit, sem a elementum venenatis, ligula massa scelerisque nulla, id hendrerit dui massa maximus leo. Proin mattis quis nisl a mollis. Phasellus sed ante id est tincidunt faucibus et eu eros. Quisque at egestas dolor. Proin tempus tincidunt neque non mollis. Suspendisse orci felis, condimentum a dignissim vitae, consectetur sit amet lorem. Curabitur congue, erat maximus blandit fermentum, ipsum elit sagittis quam, in auctor velit ipsum ac nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tincidunt blandit purus ut gravida. Vestibulum sit amet dui vitae sapien ornare lacinia et venenatis justo. Morbi libero magna, ornare id convallis vel, faucibus quis nunc.
        </p>
        <p>
          Vestibulum ultrices ac eros eu auctor. Vivamus turpis purus, ultricies sed nisi at, vestibulum pellentesque nibh. Vivamus tempor, lacus et ultrices sagittis, velit odio interdum magna, id sagittis erat mauris ullamcorper orci. Nam rhoncus arcu ut dolor sagittis, non pellentesque felis scelerisque. Sed eget nunc neque. Donec eu nisl eget nulla accumsan faucibus. Suspendisse sit amet iaculis quam, sit amet facilisis dolor. Proin accumsan massa et nunc vehicula, non tincidunt eros fringilla. Fusce tincidunt nec massa ac ultricies. Mauris ac diam et lacus rutrum finibus nec suscipit nisl. Fusce quis pulvinar nibh, et auctor nisl. Mauris hendrerit, tellus id maximus pharetra, purus turpis efficitur odio, quis consequat urna sem non tortor.
        </p>
        <p>
          Mauris luctus eget urna vel tristique. Nunc vitae neque finibus, accumsan libero vitae, ornare eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio odio. Praesent eu facilisis nulla. Vivamus pretium augue dapibus libero suscipit, vel ultrices mi dictum. Vivamus porttitor sapien sem, sed molestie risus sodales sed. Phasellus commodo consectetur posuere. Nunc est augue, egestas in tristique vitae, sagittis porttitor enim. Duis rhoncus nisl velit, non volutpat metus rutrum non. Morbi nec ex ornare lorem pulvinar tempor quis id lorem.
        </p>
        <p>
          Etiam orci est, rutrum sit amet nisi vitae, blandit elementum sapien. Nulla placerat urna in mattis hendrerit. Vivamus eu lobortis nisl, sed posuere enim. Nunc lobortis, lacus vel fringilla efficitur, justo velit aliquet arcu, id venenatis odio leo suscipit erat. Vivamus sapien massa, pretium in diam sed, pharetra scelerisque ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis sodales, velit ac lobortis gravida, odio justo malesuada ipsum, eu bibendum urna neque eu risus. Donec non arcu sit amet erat efficitur aliquet. Nunc lobortis tellus nisl, in accumsan tellus cursus sed. Nulla at rhoncus sapien. Donec massa sapien, consequat eu ex at, lobortis hendrerit felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </main>
    `)
    })
})
