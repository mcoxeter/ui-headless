### Default initialState (Idle)

```jsx
import { InlineLego } from '../inline/InlineLego';
<InlineLego>
  <ButtonLego kind='primary'>Primary</ButtonLego>
  <ButtonLego kind='secondary'>Secondary</ButtonLego>
  <ButtonLego kind='tertiary'>Tertiary</ButtonLego>
  <ButtonLego kind='danger'>Danger</ButtonLego>
</InlineLego>;
```

### Disabled initialState

```jsx
import { InlineLego } from '../inline/InlineLego';
<InlineLego>
  <ButtonLego kind='primary' initialState='DISABLED'>
    Primary
  </ButtonLego>
  <ButtonLego kind='secondary' initialState='DISABLED'>
    Secondary
  </ButtonLego>
  <ButtonLego kind='tertiary' initialState='DISABLED'>
    Tertiary
  </ButtonLego>
  <ButtonLego kind='danger' initialState='DISABLED'>
    Danger
  </ButtonLego>
</InlineLego>;
```

### Inert state

Inert is a state that is similar to disabled. The button will not react to mouse over or focus etc, but it does not go grey like a disabled state. It helpful when composing the LegoButton.

```jsx
import { InlineLego } from '../inline/InlineLego';
<InlineLego>
  <ButtonLego kind='primary' initialState='INERT'>
    Primary
  </ButtonLego>
  <ButtonLego kind='secondary' initialState='INERT'>
    Secondary
  </ButtonLego>
  <ButtonLego kind='tertiary' initialState='INERT'>
    Tertiary
  </ButtonLego>
  <ButtonLego kind='danger' initialState='INERT'>
    Danger
  </ButtonLego>
</InlineLego>;
```
