```jsx
import { StackLego } from '../../legos/stack/StackLego';
import { InlineLego } from '../../legos/inline/InlineLego';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
<StackLego spacing={'04du'} align={'left'}>
  <Button caption='Primary button' state='TEMPLATE' />
  <Button icon='plus-square' caption='Primary button' state='TEMPLATE' />
  <Button icon='plus-square' state='TEMPLATE' />
  <Button caption='Primary button' state='IDLE' applyFocus={true} />
  <Button icon='plus-square' caption='Primary button' state='IDLE' />
  <Button icon='plus-square' state='IDLE' />
  <Button caption='Primary button' state='DISABLE' />
  <Button icon='plus-square' caption='Primary button' state='DISABLE' />
  <Button icon='plus-square' state='DISABLE' />
  <Button
    icon='plus-square'
    caption='Secondary button'
    state='IDLE'
    kind='secondary'
  />
  <Button
    icon='plus-square'
    caption='Secondary button'
    state='TEMPLATE'
    kind='secondary'
  />

  <Button
    icon='plus-square'
    caption='Tertiary button'
    state='IDLE'
    kind='tertiary'
  />
  <Button
    icon='plus-square'
    caption='Tertiary button'
    state='TEMPLATE'
    kind='tertiary'
  />

  <Button
    icon='plus-square'
    caption='Danger button'
    state='IDLE'
    kind='danger'
  />
  <Button
    icon='plus-square'
    caption='Danger button'
    state='TEMPLATE'
    kind='danger'
  />
</StackLego>;
```
