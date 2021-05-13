```jsx
import { StackLego } from '../../legos/stack/StackLego';
import { InlineLego } from '../../legos/inline/InlineLego';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
<StackLego spacing={'04du'} align={'left'}>
  <Button caption='Primary button' template={true} />
  <Button icon='plus-square' caption='Primary button' template={true} />
  <Button icon='plus-square' template={true} />
  <Button caption='Primary button' initialState='IDLE' />
  <Button icon='plus-square' caption='Primary button' initialState='IDLE' />
  <Button icon='plus-square' initialState='IDLE' />
  <Button caption='Primary button' initialState='DISABLED' />
  <Button icon='plus-square' caption='Primary button' initialState='DISABLED' />
  <Button icon='plus-square' initialState='DISABLED' />
  <Button
    icon='plus-square'
    caption='Secondary button'
    initialState='IDLE'
    kind='secondary'
  />
  <Button
    icon='plus-square'
    caption='Secondary button'
    template={true}
    kind='secondary'
  />

  <Button
    icon='plus-square'
    caption='Tertiary button'
    initialState='IDLE'
    kind='tertiary'
  />
  <Button
    icon='plus-square'
    caption='Tertiary button'
    template={true}
    kind='tertiary'
  />

  <Button
    icon='plus-square'
    caption='Danger button'
    initialState='IDLE'
    kind='danger'
  />
  <Button
    icon='plus-square'
    caption='Danger button'
    template={true}
    kind='danger'
  />
</StackLego>;
```
