# Component Composition

Let's also think about why we added all these conditions in the first place 🤔. It's because we are inside JSX, and inside JSX, we can only write expressions, not statements.

## Ejemplo

Ejemplo de como se pueden utilizar statements en jsx y que el codigo se mas legible

```jsx

function Layout(props: { children: ReactNode }) {
  return (
    <Card>
      <CardHeading>Welcome 👋</CardHeading>
      <CardContent>{props.children}</CardContent>
    </Card>
  )
}

export function ShoppingList() {
  const { data, isPending } = useQuery(/* ... */)

  if (isPending) {
    return (
      <Layout>
        <Skeleton />
      </Layout>
    )
  }

  if (!data) {
    return (
      <Layout>
        <EmptyScreen />
      </Layout>
    )
  }

  return (
    <Layout>
      {data.assignee ? <UserInfo {...data.assignee} /> : null}
      {data.content.map((item) => (
        <ShoppingItem key={item.id} {...item} />
      ))}
    </Layout>
  )
}
```

Extraido del articulo [Component Composition is great btw](https://tkdodo.eu/blog/component-composition-is-great-btw)
