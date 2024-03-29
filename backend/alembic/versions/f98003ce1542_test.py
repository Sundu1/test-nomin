"""test

Revision ID: f98003ce1542
Revises: 007e3a5adf8e
Create Date: 2023-12-17 17:23:48.327206

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f98003ce1542'
down_revision = '007e3a5adf8e'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('is_viewing', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'users', 'users', ['is_viewing'], ['id'])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'users', type_='foreignkey')
    op.drop_column('users', 'is_viewing')
    # ### end Alembic commands ###
