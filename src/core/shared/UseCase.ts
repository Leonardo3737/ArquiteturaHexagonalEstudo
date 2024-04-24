export default interface UseCase<props, res> {
  exec(props: props): res
}