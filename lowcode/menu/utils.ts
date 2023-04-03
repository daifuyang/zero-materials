import { uuid } from '../_utils/utils';

export const itemsExtraProps = {
  getValue(target, fieldValue) {
    return fieldValue;
  },
  setValue(target, value) {
    if (!Array.isArray(value)) {
      value = [];
    }
    value.forEach((item) => {
      item.subMenu = false
      if ( item.subMenu && !item.subMenu?.value) {
        item.subMenu = {
          type: 'JSSlot',
          value: [
            {
              componentName: 'Menu',
              props: {
                items: [
                  {
                    key: `item-${uuid()}`,
                    title: '子菜单名',
                    href: '',
                    subMenu: false,
                  },
                ],
              },
            },
          ],
        };
      }
    });

    return target.getProps().setPropValue('items', value);

  },
};
