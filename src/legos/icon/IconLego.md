```jsx
import { InlineLego } from '../inline/InlineLego';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);
<InlineLego spacing='08du'>
  <IconLego iconName='plus-square' />
  <IconLego iconName='ellipsis-h' />
</InlineLego>;
```
