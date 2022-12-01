import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

export default function EconomicForm({}: Props) {
  return (
    <section>
        <form>
            <div>
                <label>Field(required)</label>
                <input type="text" />
            </div>
            <div>
                <label>Phone Field(required)</label>
                <input type="text" />
            </div>
            <div>
                <label>Email(required)</label>
                <input type="email" />
            </div>
            <div>
                Some link <a>Link</a>
            </div>
            <div>
                checkbox
            </div>
            <div>
                checkbox
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </section>
  )
}