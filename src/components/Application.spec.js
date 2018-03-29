import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect,should} from 'chai';

import Application from './Application';

describe('<Application/>', function () {
    it('should be able to mount application', function () {
        const wrapper = shallow(<Application/>);
        expect(wrapper.find('.main_content_holder')).to.have.length(1);
    });

    it('should have prop for title', function () {
        const wrapper = shallow(<Application/>);
        should(wrapper.props().title).exist;
    });
});