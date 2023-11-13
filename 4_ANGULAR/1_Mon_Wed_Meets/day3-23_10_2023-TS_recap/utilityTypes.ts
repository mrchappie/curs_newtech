type myType = {
  requiredProp: string;
  optionalProp?: number;
  a: string;
  b?: string;
  c: string;
};

type myReadOnlyType = Readonly<myType>;
type myRequiredType = Required<myType>;
type myOptionalType = Partial<myType>;

type myPickedType = Pick<myType, 'requiredProp' | 'optionalProp'>;
type myOmitedType = Omit<myType, 'requiredProp' | 'optionalProp'>;
type myExtractedType = Extract<
  number | string | boolean | null | undefined,
  number | string
>;

type myKeyType = keyof myType;
let keys: myKeyType[] = ['a', 'b', 'c'];
