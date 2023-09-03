import os

atoms = ['Button', 'Logo', 'InputField', 'TextArea', 'Link', 'Headings', 'Card']
molecules = ['Form', 'MediaComponent', 'MediaCard', 'IconCard', 'ImageCard']
organisms = ['TopHeader', 'NavigationBar', 'MediaSection', 'Footer', 'CopyRightBar', 'HeroSection', 'Carousel',
             'ContactForm', 'SideNavbar', 'ServicesSection', 'TestimonialsSection', 'OurTeamSection']

defaultComponentContents = lambda name: f"import React from 'react';" \
                                        f"import './{name}.scss';" \
                                        f"" \
                                        f"export interface {name}Props {{" \
                                        f"}}" \
                                        f"export const {name} = (): {name}Props => <div>{name}_component</div>"
defaultStylesContents = lambda name: f".{name} {{}}"
defaultIndexContents = lambda name: f"export * from './{name}';"
defaultStorybookContents = lambda name: "import type { Meta, StoryObj } from '@storybook/react';" \
                                        f"import {{ {name}, {name}Props }} from './{name}';" \
                                        f"const meta: Meta<typeof {name}> = {{" \
                                        f"component: {name}," \
                                        "};" \
                                        "export default meta;" \
                                        f"type Story = StoryObj<typeof {name}>;" \
                                        "export const Primary: Story = {" \
                                        "args: {" \
                                        "}," \
                                        "};"


def generate_components(names, component_type):
    for name in names:
        os.mkdir(f"src/components/{component_type}/{name}")
        with open(f"src/components/{component_type}/{name}/{name}.tsx", "w") as f:
            f.write(defaultComponentContents(name))
        with open(f"src/components/{component_type}/{name}/{name}.scss", "w") as f:
            f.write(defaultStylesContents(name))
        with open(f"src/components/{component_type}/{name}/index.ts", "w") as f:
            f.write(defaultIndexContents(name))
        with open(f"src/components/{component_type}/{name}/{name}.stories.tsx", "w") as f:
            f.write(defaultStorybookContents(name))


generate_components(atoms, "atoms")
generate_components(molecules, "molecules")
generate_components(organisms, "organisms")
